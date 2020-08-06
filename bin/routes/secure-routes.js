const express = require('express');
const router = express.Router();
const path = require('path')
const passport = require("passport");
const adminsController = require('../controllers/admins-controller');

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
            { user: req.user, page: 'contacts-details', id: req.params.id }
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
            { user: req.user, page: 'blogs-details', id: req.params.id }
        )
    })
    .get("/blogs/:id/edit", adminsController.isLoggedIn, (req, res) => {
        res.render(
            path.resolve(`bin/views/index.ejs`),
            { user: req.user, page: 'blogs-edit', id: req.params.id }
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
            if (!user) {
                let data = {
                    message: info.message,
                    type: 'error'
                };
                return res.send(data)
            }
            req.logIn(user, function (err) {
                if (err) { return next(err); }
                return adminsController.loggedinSuccess(req, res);
            });
        })(req, res, next)
    })
    .get("/logout",
        (req, res) => adminsController.logout(req, res));

module.exports = router;
