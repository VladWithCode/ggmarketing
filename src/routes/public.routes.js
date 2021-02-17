const Router = require('express').Router();

const {
  createStripeCustomer,
  createStripeSubscription,

} = require('../controllers/public-api');

Router.post('/stripe/customers/create', createStripeCustomer);

Router.post('/stripe/subscriptions/create', createStripeSubscription);

module.exports = Router;
