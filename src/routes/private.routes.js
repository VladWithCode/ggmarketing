const Router = require('express').Router();

const {
  createNewPlan,

} = require('../controllers/private-api')

Router.post('/plans/new', createNewPlan);

module.exports = Router;
