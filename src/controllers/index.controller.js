// Config import
const {
  oAuth2Client,
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
} = require('../config/oauth');

// Libs
const nodemailer = require('nodemailer');
const stripe = require('../config/stripe');
const Plan = require('../models/Plan');

// Controller init
const ctrl = {};

// Render handlers
ctrl.renderIndex = function (req, res, next) {
  res.render('pages/index');
};

ctrl.renderServices = function (req, res, next) {
  res.render('pages/services');
};

ctrl.renderAbout = function (req, res, next) {
  res.render('pages/about');
};

ctrl.renderProjects = function (req, res, next) {
  res.render('pages/projects');
};

ctrl.renderContact = function (req, res, next) {
  res.render('pages/contact');
};

ctrl.renderSuscribe = async function (req, res, next) {
  const { plan } = req.params;
  let foundPlan;

  try {
    foundPlan = await Plan.findOne({
      $where: `this.name.toLowerCase() === '${plan}'`,
    });
  } catch (err) {
    return next(err);
  }

  if (!foundPlan)
    return res.json({
      status: 404,
      statusTxt: 'NOT_FOUND',
      msg: `No se encontro el plan "${plan}"`,
    });

  let paymentIntent;

  try {
    paymentIntent = await stripe.paymentIntents.create({
      amount: foundPlan.price * 100, // Subtotal * 100 (Stripe uses smallest currency unit)
      currency: 'mxn',
    });
  } catch (err) {
    return next(err);
  }

  return res.render('pages/suscribe', {
    plan,
    planId: foundPlan.id,
    clientSecret: paymentIntent.client_secret,
  });
};

ctrl.renderAddPassword = (req, res, next) => {
  const { customer_id } = req.cookies;

  res.render('pages/user/addPass', {
    customerId: customer_id,
  });
};

// Operation handlers
ctrl.sendMail = async function (req, res, next) {
  try {
    const { mail, name, msg } = req.body;
    const senderMail = process.env.SENDER_MAIL;
    const receiverMail = process.env.RECEIVER_MAIL;

    console.log(`Sender Mail: ${senderMail}
Receiver Mail: ${receiverMail}
Refresh Token: ${REFRESH_TOKEN}
Client ID: ${CLIENT_ID}
Client SECRET: ${CLIENT_SECRET}
`);

    const accessToken = await oAuth2Client.getAccessToken();

    const mailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: senderMail || 'vladwithcode@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: `GG Marketing | ${senderMail}`,
      to: receiverMail || 'vladwithb@gmail.com',
      subject: `Nueva solicitud de contacto desde ggmkt.com.mx.`,
      text: `Se ha solicidado contacto desde https://ggmkt.com.mx/
        Usuario: ${name}
        Correo: ${mail}
        Consulta: ${msg}`,
      html: createHTMLMessage(name, mail, msg),
    };

    const mailSent = await mailTransporter.sendMail(mailOptions);

    console.log(mailSent);

    req.flash('success', 'Se ha enviado el correo');
    return res.redirect('/contacto');
  } catch (err) {
    console.log(err);
    req.flash(
      'err',
      'Se ha producido un error al enviar tu solicitud. Intenta de nuevo mas tarde.'
    );
    return res.redirect('/contacto');
  }

  function createHTMLMessage(name, mail, msg) {
    return `<h1></h1>
    <p>Nombre: ${name}</p>
    <p>Correo: ${mail}</p>
    <p>Consulta: ${msg}</p>`;
  }
};

// Exporting
module.exports = ctrl;
