// Router init
const Router = require('express').Router();
// Controller import
const {
  renderIndex,
  renderAbout,
  renderProjects,
  renderContact
} = require('../controllers/index.controller.js');

// Render Routes
Router.get('/', renderIndex);

Router.get('/nosotros', renderAbout);

Router.get('/proyectos', renderProjects);

Router.get('/contacto', renderContact);

module.exports = Router;