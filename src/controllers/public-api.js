const { isValidObjectId } = require('mongoose');
const stripe = require('../config/stripe');
const Plan = require('../models/Plan');
const Subscription = require('../models/Subscription');
const Customer = require('../models/Customer');

const ctrl = {};

// Local API's Methods
ctrl.createSubscription = async (req, res, next) => {
  const {
    customer_id: customerId,
    stripe_customer_id,
    stripe_price_id,
  } = req.cookies;
  const { subscription, customer: customerInfo } = req.body;

  try {
    let customerQuery = Customer.findById(customerId),
      planQuery = Plan.findOne({ stripe_id: stripe_price_id });

    const [foundCustomer, foundPlan] = await Promise.all([
      customerQuery,
      planQuery,
    ]);

    foundCustomer.subscriptionActive = true;

    // console.log(subscription);

    const newSubscription = new Subscription({
      customer: foundCustomer.id,
      plan: foundPlan.id,
      stripe_id: subscription.id,
      endsAt: subscription.current_period_end,
      createdAt: subscription.created,
      paymentMethod: {
        stripe_id: subscription.latest_invoice.payment_intent.payment_method,
      },
      lastPayedAt: subscription.latest_invoice.status_transitions.paid_at,
      lastestInvoiceURL: subscription.latest_invoice.invoice_pdf,
    });

    foundCustomer.subscription = newSubscription.id;
    foundCustomer.subscriptionActive = true;

    foundPlan.lastSubscribed = Date.now();
    foundPlan.subscribers.push(foundCustomer.id);
    foundPlan.subscriberCount += 1;

    await Promise.all([
      newSubscription.save(),
      foundCustomer.save(),
      foundPlan.save(),
    ]);

    return res.status(201).json({
      status: 201,
      statusTxt: 'CREATED',
      msg: 'Se ha creado la subscripcion correctamente',
    });
  } catch (err) {
    if (err.name === 'MongoError') {
      console.log(err);
      return res.json({
        status: 500,
        statusTxt: 'DB_ERROR',
        msg: 'Ha ocurrido un error con la base de datos.',
        err,
      });
    }

    return next(err);
  }
};

/* Users */
ctrl.addUserPassword = async (req, res, next) => {
  const { user, pass } = req.body;

  try {
    const foundUser = await Customer.findById(user);

    if (!foundUser)
      throw {
        code: 'NO_USER_FOUND',
        msg:
          'El usuario al que se desea agregar la contraseña no pudo ser encontrado o no existe.',
        user: foundUser.name,
      };

    if (foundUser.pass?.length) {
      throw {
        code: 'EXISTING_PASSWORD',
        msg: 'La contraseña de este usuario ya fue definida.',
        user: foundUser.name,
      };
    }

    foundUser.pass = pass;

    await foundUser.save();

    return res.status(201).json({
      status: 201,
      statusTxt: 'UPDATED',
    });
  } catch (err) {
    // console.log(err);
    if (err.code === 'NO_USER_FOUND' || err.code === 'EXISTING_PASSWORD') {
      return res.status(500).json({
        status: 500,
        statusTxt: err.code,
        msg: err.msg,
        err,
      });
    }

    return next(err);
  }
};

// Stripe API's Methods
ctrl.createStripeCustomer = async (req, res, next) => {
  const { plan, name, lastname, phone, email } = req.body;

  if (!isValidObjectId(plan))
    return res.json({
      status: 400,
      statusTxt: 'NO_PLAN',
      msg: 'Se necesita un plan para continuar con el proceso de subscripcion.',
      idProvided: plan,
    });

  try {
    const newCustomer = new Customer({
      name: name,
      lastname: lastname,
      email: email,
      phone: phone,
    });

    const planQuery = Plan.findById(plan);
    const customerValidate = newCustomer.validate();

    const [foundPlan] = await Promise.all([planQuery, customerValidate]);

    if (!foundPlan)
      return res.json({
        status: 400,
        statusTxt: 'PLAN_NOT_FOUND',
        msg: 'El plan seleccionado no está disponible o no existe.',
      });

    const stripeCustomer = await stripe.customers.create({
      email: email,
      name: `${name} ${lastname}`,
      phone: phone,
    });

    newCustomer.plan = plan;
    newCustomer.stripe_customer_id = stripeCustomer.id;

    await newCustomer.save();

    return res
      .cookie('customer_id', newCustomer.id, { sameSite: 'lax' })
      .cookie('stripe_customer_id', stripeCustomer.id, { sameSite: 'lax' })
      .cookie('stripe_price_id', foundPlan.stripe_id, { sameSite: 'lax' })
      .json({
        status: 200,
        statusTxt: 'OK',
        msg: 'Nuevo cliente creado con exito',
      });
  } catch (err) {
    console.log(err);

    switch (err.name) {
      case 'MongoError':
        console.log(err);
        return res.status(400).json({
          msg: 'Ha ocurrido un error con la base de datos.',
          statusTxt: 'DB_ERROR',
          status: 400,
          err,
        });
      case 'ValidationError':
        console.log(err);
        return res.status(400).json({
          msg:
            'Ha ocurrido un error con al intentar validar la informacion proporcionada.\nRevisala e intenta de nuevo.',
          statusTxt: 'VALIDATION_ERROR',
          status: 400,
          err,
        });
    }

    if (err.type === 'StripeInvalidRequestError') {
      console.log(err);
      return res.json({
        status: 500,
        statusTxt: 'INPUT_ERROR',
        msg:
          'Se han ingresado valores invalidos. Reviselos y vuelva a intentarlos',
        err,
      });
    }

    return res.json({
      status: 500,
      statusTxt: 'SERVER_ERROR',
      msg: 'Ocurrio un error en el servidor.',
      err,
    });
  }
};

ctrl.createStripeSubscription = async (req, res, next) => {
  const { customerId, paymentMethodId, priceId } = req.body;

  try {
    await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customerId,
    });
  } catch (err) {
    let message = 'Tarjeta rechazada.';
    if (err.decline_code === 'insufficient_funds')
      message = `${message} Fondos insuficientes.`;
    else if (err.decline_code === 'lost_card')
      message = `${message} La tarjeta fue marcada como perdida`;
    else if (err.decline_code === 'stolen_card')
      message = `${message} La tarjeta fue marcada como robada`;
    else if (err.expired_card) message = `${message} La tarjeta ya expiró`;
    else if (err.incorrect_cvc)
      message = `${message} No ha ingresado el CVC correcto`;
    else if (err.incorrect_number)
      message = `${message} El número de tarjeta es invalido`;

    return res.status(402).json({
      error: {
        message: message || 'Tarjeta rechazada. Intente con una diferente.',
      },
    });
  }

  await stripe.customers.update(customerId, {
    invoice_settings: {
      default_payment_method: paymentMethodId,
    },
  });

  const subscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
    expand: ['latest_invoice.payment_intent'],
  });

  return res.json(subscription);
};

module.exports = ctrl;
