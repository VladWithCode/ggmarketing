// Modules
const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const morgan = require('morgan');
const expSession = require('express-session');
const flash = require('connect-flash');

// Inits
const app = express();

/* Route imports */
const indexRoutes = require('./routes/index.routes');

/* Helpers */

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
  extname: '.hbs',
  defaultLayout: false,
  partialsDir: path.join(app.get('views'), 'partials'),
  helpers: {

  }
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expSession({
  secret: process.env.XSESSION_SECRET || 'c007e2711578be94eef809d96074d04f',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: true
  }
}));
app.use(flash());
app.use(morgan('dev'));

// Routes
app.use(indexRoutes);

// Static
app.use(express.static(path.join(__dirname, 'public')));

// Error Handling
if (process.env.NODE_ENV === 'production') {
  app.use((err, req, res , next) => {
    if (req.headersSent) return next(err);
    console.log(err);
    return res.status(500).render('pages/5xx', {
      msg: 'Ha ocurrido un error en el servidor.'
    });
  });
} else if (process.env.NODE_ENV === 'development') {
  app.use((err, req, res, next) => {
    if (req.headersSent) return next(err);
    console.log(err);
    return res.status(500).render('pages/5xx', {
      msg: 'Ha ocurrido un error',
      err: err
    });
  });
}

// Exporting
module.exports = app;
