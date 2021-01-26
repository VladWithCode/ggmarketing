// Router init
const Router = require('express').Router();
// Controller import
const {
  renderIndex,
  renderAbout,
  renderProjects,
  renderContact,
  sendMail,
  renderServices
} = require('../controllers/index.controller.js');

// Render Routes
Router.get('/', renderIndex);

Router.get('/servicios', renderServices);

Router.get('/nosotros', renderAbout);

Router.get('/proyectos', renderProjects);

Router.get('/contacto', renderContact);

// Operation Routes
Router.post('/send-mail', sendMail);

module.exports = Router;
