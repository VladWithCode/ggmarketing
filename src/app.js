// Modules
const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const expSession = require('express-session');
const flash = require('connect-flash');
const cookieparser = require('cookie-parser');
const morgan = require('morgan');

// Inits
const app = express();
require('./config/db');

/* Route imports */
const indexRoutes = require('./routes/index.routes');
const publicApiRoutes = require('./routes/public.routes');
const privateApiRoutes = require('./routes/private.routes');
const stripeWh = require('./routes/stripe-wh');

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

// Stripe webhook route
app.use('/stripe/webhooks', express.raw({ type: 'application/json' }), stripeWh);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser(process.env.COOKIE_SECRET || 'c007e2711578be94eef809d96074d04f'));
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

/* if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    res.setHeader('Set-Cookie', 'm_pixel_ratio=1;domain=.facebook.com;sameSite=None;Secure');

    return next();
  });
} */

// Routes
app.use('/api', publicApiRoutes);
app.use('/api', /* isAuthenticated, */ privateApiRoutes);
app.use(indexRoutes);

// Static
app.use(express.static(path.join(__dirname, 'public')));

// Error Handling
if (process.env.NODE_ENV === 'production') {
  app.use((err, req, res, next) => {
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
