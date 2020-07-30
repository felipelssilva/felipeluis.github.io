const express = require('express');
const router = express.Router();
const path = require('path')
const passport = require("passport");
const adminsController = require('../controllers/admins-controller');

router.get('/', adminsController.isLoggedIn, (req, res, next) => {
    res.render(path.resolve(`bin/views/index.ejs`), { user: req.user, page: 'home' })
});

router.get("/contacts", adminsController.isLoggedIn, function (req, res) {
    res.render(path.resolve(`bin/views/index.ejs`), { user: req.user, page: 'contacts' })
});

router.get("/contacts/:id", adminsController.isLoggedIn, function (req, res) {
    res.render(path.resolve(`bin/views/index.ejs`), { user: req.user, page: 'contacts-details', id: req.param('id') })
});

router.get("/blogs", adminsController.isLoggedIn, function (req, res) {
    res.render(path.resolve(`bin/views/index.ejs`), { user: req.user, page: 'blogs' })
});

// router.get("/blogs/:id", adminsController.isLoggedIn, function (req, res) {
//     res.render(path.resolve(`bin/views/index.ejs`), { user: req.user, page: 'blogs-details', id: req.param('id') })
// });

router.get("/login", function (req, res) {
    res.render(path.resolve(`bin/views/index.ejs`), { user: '', page: 'login' })
});

router.post("/login", passport.authenticate("local", {
    failureFlash: "Incorrect username or password",
    failureRedirect: "/secure/login?error=true",
}), function (req, res) {
    console.log("LOGGED IN " + req.user.name)
    res.redirect('/secure');
});

router.get("/logout", function (req, res) {
    console.log("LOGGIN OUT " + req.user.name)
    req.logout();
    res.redirect('/secure/login');
});

module.exports = router;