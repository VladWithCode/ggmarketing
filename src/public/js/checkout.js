import { getCookie } from './helpers.js';
document.addEventListener('DOMContentLoaded', async () => {
  const customer = {};
  const stripe = Stripe('pk_test_51IGxuIBpiWpF8qxws2rd14mxZETkVC7kiyUQMdTN1XfeksK9YM1F0Mq6gs3BLWoYwPcaKGLd9M45ndFeyBOqYrgn0048gbBXqz');
  const elements = stripe.elements();
  // Form containers
  const infoFormContainer = document.querySelector('.scrCustomer');
  const paymentFormContainer = document.querySelector('.scrPayment');

  /* Personal Data Form */
  const infoForm = document.forms['infoForm'];
  infoForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    for (let inp of this.elements) {
      if (!inp.value.trim()) continue;

      customer[inp.name] = inp.value.trim();
    }

    const {
      err,
      msg,
      statusTxt,
    } = await (await fetch('/api/stripe/customers/create', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(customer)
    })).json();

    if (err) {
      console.log(err);
      if (err.code === 'email_invalid') {
        let invalidField =document.getElementById('email');
        invalidField.classList.add('invalid');
        invalidField.nextElementSibling.textContent = 'Este campo contener un email válido';
        invalidField.onchange = function (e) { this.classList.remove('invalid'); this.nextElementSibling.textContent = '' }
      }
      return alert(msg);
    }

    switch (statusTxt) {
      case 'PLAN_NOT_FOUND':
        console.log(customer);
        return alert(msg);
      case 'OK':
        infoFormContainer.classList.add('fade-out');
        infoFormContainer.addEventListener('animationend', function (e) {
          this.classList.add('d-none');
          this.classList.remove('fade-out');

          paymentFormContainer.classList.remove('d-none');
          paymentFormContainer.classList.add('fade-in');
        });
        paymentFormContainer.addEventListener('animationend', function (e) {
          this.classList.remove('fade-in')
        });
    }
  });

  /* Payment Form */
  const paymentForm = document.forms['paymentForm'];
  const cardStyle = {
    base: {
      color: "#32325d",
      fontFamily: 'Montserrat, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#32325d",
        fontFamily: 'Montserrat, sans-serif'
      }
    },
    invalid: {
      fontFamily: 'Roboto, sans-serif',
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
  const stripeCardElement = elements.create('card', { style: cardStyle });

  stripeCardElement.mount('#card-element');
  stripeCardElement.on('change', evt => {
    document.querySelector('#payment-submit').disabled = evt.empty;
    document.querySelector('#card-error').textContent = evt.error?.message || "";
  });

  // Payment Form Submission handling
  paymentForm.addEventListener('submit', async e => {
    e.preventDefault();
    loading();
    const customerId = getCookie('stripe_customer_id');
    const priceId = getCookie('stripe_price_id');
    const createdPaymentMethod = await createPaymentMethod();
    if (!createdPaymentMethod) return;
    customer.paymentMethodId = createdPaymentMethod.id;

    const createdSubscription = await createSubscription(customerId, createdPaymentMethod.id, priceId);
    if (!createdSubscription) return;

    handleSuscriptionCreated(createdSubscription)
  });

  async function createPaymentMethod() {
    let billingName = `${customer.name} ${customer.lastname}`;

    const stRes = await stripe.createPaymentMethod({
      type: 'card',
      card: stripeCardElement,
      billing_details: {
        name: billingName
      }
    });

    if (stRes.error) {
      console.log(stRes);
      loading(false)
      return displayError(stRes.error.message);
    }

    return stRes.paymentMethod;
  }

  async function createSubscription(customerId, paymentMethodId, priceId) {
    let subscription = null;

    try {
      subscription = await (await fetch('/api/stripe/subscriptions/create', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          paymentMethodId,
          customerId,
          priceId
        })
      })).json();

      if (subscription.error) throw { ...subscription.error };

      loading(false);
      document.querySelector('#payment-submit').disabled = true;
    } catch (err) {
      console.log(err);
      loading(false);
      err.message && displayError(err.message);
      subscription = null;
    }

    return subscription;
  }

  async function handleSuscriptionCreated(subscription, invoice, isRetry = false) {
    const latestInvoiceId = sessionStorage.getItem('latestInvoiceId');
    const latestInvoicePaymentIntendStatus = sessionStorage.getItem('latestInvoicePaymentIntentStatus');
    const paymentIntent = subscription.latest_invoice.payment_intent;

    switch (paymentIntent.status) {
      case 'succeeded':
        return await handleSubscriptionCompleted(subscription);
      case 'requires_action':
        let payed = await handleRequiresCustomerAction({
          subscription,
          paymentMethodId: customer.paymentMethodId
        });

        if (payed !== true) return handleSuscriptionCreated(subscription,);

        return await handleSubscriptionCompleted(subscription);
    }
  }

  async function handleSubscriptionCompleted(subscription) {
    try {
      let result = await (await fetch('/api/subscriptions/create', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ subscription, customer })
      })).json();

      if (result.err) throw { ...result.err, msg: result.msg };

      location.assign('/contratar/finalizar');
    } catch (err) {
      console.log(err);
      return alert(err.msg);
    }
  }

  async function handleRequiresCustomerAction({
    subscription,
    invoice,
    paymentMethodId,
    isRetry
  }) {
    let result = null;
    let paymentIntent = invoice ? invoice.payment_intent : subscription.latest_invoice.payment_intent;

    if (paymentIntent.status === 'requires_action' || (isRetry && paymentIntent.status === 'requires_payment_method')) {
      try {
        result = await stripe.confirmCardPayment(paymentIntent.client_secret, {
          payment_method: paymentMethodId
        });

        if (result.error) throw { ...result.error };
        console.log(result)

        if (result.paymentIntent.status === 'succeeded') return true;
      } catch (err) {
        console.log(err);
        loading(false);
        err.message && displayError(err.message);
        return false;
      }
    }
  }

  async function handleRequiresAction(subscription, paymentMethodId) {
    let paymentIntent = subscription.latest_invoice?.payment_intent || subscription.payment_intent;

    try {

    } catch (err) {

    }
  }

  function displayError(msg) {
    document.querySelector('#card-error').textContent = msg;
    document.querySelector('#payment-submit').disabled = true;
    setTimeout(function () {
      document.querySelector('#card-error').textContent = "";
      // document.querySelector('#payment-submit').disabled = false;
    }, 8000);
  }

  function loading(isLoading = true) {
    if (isLoading) {
      document.querySelector('#payment-submit').disabled = true;
      document.querySelector('.spinner').classList.add('active');
      document.querySelector('#text').hidden = true;
    } else {
      document.querySelector('#payment-submit').disabled = false;
      document.querySelector('.spinner').classList.remove('active');
      document.querySelector('#text').hidden = false;
    }
  }

  // Animation/Transition listeners
});
