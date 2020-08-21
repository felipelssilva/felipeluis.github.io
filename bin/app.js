const express = require('express');
const passport = require("passport");
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path')

require('dotenv').config();

const nomeApp = process.env.npm_package_name
const env = process.env.NODE_ENV

// Load models
const Contacts = require('./models/contacts');
const Admins = require("./models/admins");
const Blogs = require("./models/blogs");
const Abouts = require("./models/about");

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
app.set("view engine", "ejs")

app.use(cookieParser(process.env.SECRET));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());

app.use((req, res, next) => {
    res.locals.message = req.flash();
    next();
});

// Database
global.db = require('./db');

// Load routes
const indexRoutes = require('./routes/index-routes');
const secureRoutes = require('./routes/secure-routes');
const apiRoutes = require('./routes/api-routes');
const contactsRoutes = require('./routes/contacts-routes');
const blogsRoutes = require('./routes/blogs-routes');
const aboutRoutes = require('./routes/about-routes');

app.use(express.static(`dist/${nomeApp}`));
app.use('/', indexRoutes);
app.use('/secure', secureRoutes);

app.use('/api', apiRoutes);
app.use('/api/contacts', contactsRoutes);
app.use('/api/blogs', blogsRoutes);
app.use('/api/about', aboutRoutes);

app.use('/secure/*', (req, res) => {
    res.status(404).render(path.resolve(`bin/views/index`),
        { user: req.user, page: 'error', response: res.statusCode }
    )
})

module.exports = app;