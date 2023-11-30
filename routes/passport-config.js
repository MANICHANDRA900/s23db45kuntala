// passport-config.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Account = require('./models/account'); // Adjust the path based on your project structure

passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
