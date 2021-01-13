// Router init
const Router = require('express').Router();
// Controller import
const {
  renderIndex
} = require('../controllers/index.controller.js');

Router.get('/', renderIndex);

module.exports = Router;
