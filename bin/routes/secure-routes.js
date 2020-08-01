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
    .post("/login",
        passport.authenticate("local", {
            failureFlash: "Incorrect username or password",
            failureRedirect: "/secure/login?error=true",
        }),
        (req, res) => {
            console.log("LOGGED IN " + req.user.name)
            res.redirect('/secure');
        })
    .get("/logout",
        (req, res) => {
            console.log("LOGGIN OUT " + req.user.name)
            req.logout();
            res.redirect('/secure/login');
        });

module.exports = router;