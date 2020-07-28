const express = require('express');
const router = express.Router();
const path = require('path')
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const Admins = require('../models/admins');

router.get('/', isLoggedIn, (req, res, next) => {
  res.render(path.resolve(`bin/views/secure.ejs`))
});

router.get("/login", function (req, res) {
  res.render(path.resolve(`bin/views/login.ejs`))
});

//Handling user login 
router.post("/login", passport.authenticate("local", {
  successFlash: "Bem vindo!",
  successRedirect: "/secure",
  failureFlash: 'Usuário ou senha inválido',
  failureRedirect: "/secure/login?error=true",
}), function (req, res) {
  req.flash('success', 'Você está logado!!!');
  // res.redirect('/');
});

//Handling user logout  
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/secure");
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/secure/login");
}

passport.serializeUser(function (username, done) {
  done(null, username.id);
});

passport.deserializeUser(function (id, done) {
  Admins.getUserById(id, function (err, username) {
    done(err, username);
  });
});

passport.use(new LocalStrategy(function (username, password, done) {
  Admins.getUserByUsername(username, function (err, admin) {
    if (err) throw err;
    if (!admin) {
      return done(null, false, { message: 'Usuário não existente.' });
    }

    Admins.comparePassword(password, Admins.password, function (err, isMatch) {
      if (err) return done(err);
      if (isMatch) {
        return done(null, admin);
      } else {
        return done(null, false, { message: 'Senha inválida' });
      }
    });
  });
}));


module.exports = router;