const { isValidObjectId } = require("mongoose");
const stripe = require("../config/stripe");
const Customer = require("../models/Customer");
const Plan = require("../models/Plan");

const ctrl = {};

ctrl.createStripeCustomer = async (req, res, next) => {
  const {
    plan,
    name,
    lastname,
    phone,
    email
  } = req.body;

  if (!isValidObjectId(plan)) return res.json({
    status: 400,
    statusTxt: 'NO_PLAN',
    msg: 'Se necesita un plan para continuar con el proceso de subscripcion.',
    idProvided: plan
  })

  try {
    const newCustomer = new Customer({
      name: name,
      lastname: lastname,
      email: email,
      phone: phone
    });

    const planQuery = Plan.findById(plan);
    const customerValidate = newCustomer.validate();

    const [foundPlan] = await Promise.all([planQuery, customerValidate]);

    if (!foundPlan) return res.json({
      status: 400,
      statusTxt: 'PLAN_NOT_FOUND',
      msg: 'El plan seleccionado no está disponible o no existe.'
    });

    const stripeCustomer = await stripe.customers.create({
      email: email,
      name: `${name} ${lastname}`,
      phone: phone
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
        msg: 'Nuevo cliente creado con exito'
      });
  } catch (err) {
    console.log(err);

    if (err.name === 'MongoError') {
      return res.status(400).json({
        msg: 'Ha ocurrido un error con la base de datos.',
        statusTxt: 'DB_ERROR',
        status: 400,
        err
      });
    }

    if (err.name === 'ValidationError') {
      return res.status(400).json({
        msg: 'Ha ocurrido un error con al intentar validar la informacion proporcionada.\nRevisala e intenta de nuevo.',
        statusTxt: 'VALIDATION_ERROR',
        status: 400,
        err
      });
    }

    return res.json({
      status: 500,
      statusTxt: 'SERVER_ERROR',
      msg: 'Ocurrio un error en el servidor.',
      err
    });
  }
};

ctrl.createStripeSubscription = async (req, res, next) => {
  const {
    customerId,
    paymentMethodId,
    priceId
  } = req.body;

  try {
    await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customerId
    });
  } catch (err) {
    let message = 'Tarjeta rechazada.';
    if (err.decline_code === 'insufficient_funds') message = `${message} Fondos insuficientes.`
    else if (err.decline_code === 'lost_card') message = `${message} La tarjeta fue marcada como perdida`
    else if (err.decline_code === 'stolen_card') message = `${message} La tarjeta fue marcada como robada`
    else if (err.expired_card) message = `${message} La tarjeta ya expiró`
    else if (err.incorrect_cvc) message = `${message} No ha ingresado el CVC correcto`
    else if (err.incorrect_number) message = `${message} El número de tarjeta es invalido`
    
    return res.status(402).json({
      error: { message: message || 'Tarjeta rechazada. Intente con una diferente.' }
    });
  }

  await stripe.customers.update(customerId, {
    invoice_settings: {
      default_payment_method: paymentMethodId
    }
  });

  const subscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
    expand: ['latest_invoice.payment_intent']
  });

  return res.json(subscription);
}

module.exports = ctrl;
