const passport = require('pass');
const LocalStrategy = require('passport-local').Strategy;

const Customer = require('../models/Customer');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    done(null, await Customer.findById(id));
  } catch (err) {
    done(err, false);
  }
});

passport.use('customer.signin', new LocalStrategy({
  usernameField: 'user',
  passwordField: 'pass'
}, async (user, pass, done) => {
  try {
    const existingUser = await Customer.findOne({ email: user });

    if (!existingUser) return done(null, false, { message: 'Usuario no registrado' });

    return done(null, existingUser);
  } catch (err) {
    return done(err, false);
  }
}));
