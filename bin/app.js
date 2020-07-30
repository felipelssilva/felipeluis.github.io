const express = require('express');
const mongoose = require('mongoose');
const passport = require("passport");
// const bodyParser = require("body-parser");
// const LocalStrategy = require('passport-local').Strategy;
// const passportLocalMongoose = require("passport-local-mongoose");
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const bcrypt = require('bcryptjs');

const nomeApp = process.env.npm_package_name

require('dotenv').config();

// Load models
const Mentions = require('./models/mentions');
const Contacts = require('./models/contacts');
const Admins = require("./models/admins");

// App
const app = express();

app.use(require("express-session")({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs")

app.use(cookieParser('secret'));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());

app.use(function (req, res, next) {
    res.locals.message = req.flash();
    next();
});

// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
            'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});


// Load routes
const indexRoutes = require('./routes/index-routes');
const secureRoutes = require('./routes/secure-routes');
const apiRoutes = require('./routes/api-routes');
const mentionsRoutes = require('./routes/mentions-routes');
const contactsRoutes = require('./routes/contacts-routes');

app.use(express.static(`dist/${nomeApp}`));
app.use('/', indexRoutes);
app.use('/secure', secureRoutes);

app.use('/api', apiRoutes);
app.use('/api/mentions', mentionsRoutes);
app.use('/api/contacts', contactsRoutes);

app.use(function (req, res, next) {
    res.status(404).send('404');
});

module.exports = app;