const express = require('express');
const passport = require("passport");
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');

require('dotenv').config();

const nomeApp = process.env.npm_package_name
const env = process.env.NODE_ENV

// App
const app = express();

app.use(require("express-session")({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cookieParser(process.env.SECRET));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());

app.use((req, res, next) => {
    res.locals.message = req.flash();
    next();
});

// Load routes
const indexRoutes = require('./src/pages/index-route');

app.use(express.static(`dist/${nomeApp}/browser`));
app.use('/', indexRoutes);

module.exports = app;
