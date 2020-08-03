const express = require('express');
const router = express.Router();
const path = require('path')
const passport = require("passport");
const adminsController = require('../controllers/admins-controller');
const jwt = require('jsonwebtoken');

router
    .get('/', adminsController.isLoggedIn, (req, res, next) => {
        res.render(
            path.resolve(`bin/views/index.ejs`),
            { user: req.user, page: 'home' }
        )
    })
    .get("/contacts", adminsController.isLoggedIn, (req, res) => {
        res.render(
            path.resolve(`bin/views/index.ejs`),
            { user: req.user, page: 'contacts' }
        )
    })
    .get("/contacts/:id", adminsController.isLoggedIn, (req, res) => {
        res.render(
            path.resolve(`bin/views/index.ejs`),
            { user: req.user, page: 'contacts-details', id: req.param('id') }
        )
    })
    .get("/blogs", adminsController.isLoggedIn, (req, res) => {
        res.render(
            path.resolve(`bin/views/index.ejs`),
            { user: req.user, page: 'blogs' }
        )
    })
    .get("/blogs/:id", adminsController.isLoggedIn, (req, res) => {
        res.render(
            path.resolve(`bin/views/index.ejs`),
            { user: req.user, page: 'blogs-details', id: req.param('id') }
        )
    })
    .get("/blogs/:id/edit", adminsController.isLoggedIn, (req, res) => {
        res.render(
            path.resolve(`bin/views/index.ejs`),
            { user: req.user, page: 'blogs-edit', id: req.param('id') }
        )
    })
    .get("/blog/add", adminsController.isLoggedIn, (req, res) => {
        res.render(
            path.resolve(`bin/views/index.ejs`),
            { user: req.user, page: 'blog-add' }
        )
    })
    .get("/login", (req, res) => {
        res.render(
            path.resolve(`bin/views/index.ejs`),
            { user: '', page: 'login' }
        )
    })
    .post("/login", function (req, res, next) {
        passport.authenticate('local', function (err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.send({ data: info }) }
            req.logIn(user, function (err) {
                if (err) { return next(err); }
                return loggedinSuccess(req, res);
            });
        })(req, res, next)

        // passport.authenticate("local", {
        //     failureFlash: "Incorrect username or password",
        //     failureRedirect: "/secure/login?error=true",
        // }),
        // (req, res) => {
        //     console.log("LOGGED IN " + req.user.name)

        //     const userId = req.user._id;
        //     let token = jwt.sign({ userId }, process.env.SECRET, {
        //         expiresIn: '1d' // expires in 5min
        //     });
        //     return res.json({ auth: true, token: token });

    })
    .get("/logout",
        (req, res) => {
            console.log("LOGGIN OUT " + req.user.name)
            req.logout();
            res.redirect('/secure/login');
        });

module.exports = router;

function loggedinSuccess(req, res) {
    console.log("LOGGED IN " + req.user.name)
    const userId = req.user._id;
    let token = jwt.sign({ userId }, process.env.SECRET, {
        expiresIn: '1d' // expires in 5min
    });
    return res.json({ auth: true, token: token });
}