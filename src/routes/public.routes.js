const Router = require('express').Router();

const {
  createStripeCustomer,
  createStripeSubscription,
  createSubscription,
  addUserPassword,

} = require('../controllers/public-api');

// Local API's Routes
Router.post('/subscriptions/create', createSubscription);

/* Users */
Router.post('/users/add-password', addUserPassword);

// Stripe API's Routes
Router.post('/stripe/customers/create', createStripeCustomer);

Router.post('/stripe/subscriptions/create', createStripeSubscription);

module.exports = Router;
