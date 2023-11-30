var express = require('express');
var passport = require('passport');
var router = express.Router();
var Account = require('../models/account');

// Home page
router.get('/', function (req, res) {
  res.render('index', { title: 'equipment App', user: req.user });
});

// Registration
router.get('/register', function (req, res) {
  res.render('register', { title: 'equipment App Registration' });
});

router.post('/register', function (req, res) {
  Account.findOne({ username: req.body.username })
    .then(function (user) {
      if (user != null) {
        console.log("exists " + req.body.username);
        return res.render('register', { title: 'Registration', message: 'Existing User', account: req.body.username });
      }

      let newAccount = new Account({ username: req.body.username });
      Account.register(newAccount, req.body.password, function (err, user) {
        if (err) {
          console.log("db creation issue " + err);
          return res.render('register', { title: 'Registration', message: 'access error', account: req.body.username });
        }

        if (!user) {
          return res.render('register', { title: 'Registration', message: 'access error', account: req.body.username });
        }

        console.log('Success, redirect');
        res.redirect('/');
      });
    })
    .catch(function (err) {
      return res.render('register', { title: 'Registration', message: 'Registration error', account: req.body.username });
    });
});

// Login
router.get('/login', function (req, res) {
  res.render('login', { title: 'equipment App Login', user: req.user });
});

router.post('/login', passport.authenticate('local'), function (req, res) {
  if (req.session.toReturn) {
    console.log("Send it back to " + req.session.toReturn);
    res.redirect(req.session.toReturn);
  } else {
    res.redirect('/');
  }
});

// Logout
router.get('/logout', function (req, res) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

// Ping
router.get('/ping', function (req, res) {
  res.status(200).send("pong!");
});

module.exports = router;
