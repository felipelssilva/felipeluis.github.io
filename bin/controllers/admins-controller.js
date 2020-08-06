const { validationResult } = require('express-validator');
const repository = require('../repositories/admins-repository');
const passport = require("passport");
const Admins = require('../models/admins');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const { verifyJWT } = require('../auth');

// list
exports.list = async (req, res) => {
    try {
        const data = await repository.list();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Failed to load admins!' });
    }
};

// exports.handlerLogin = function (req, res) {
//     // 'Usuário ou senha inválido'

//     passport.authenticate("local", {
//         successRedirect: "/secure",
//         failureFlash: true,
//         failureRedirect: "/secure/login?error=true",
//     }), function (req, res) {
//         req.flash('success', 'Você está logado!!!');
//         // res.redirect('/');
//     }
// };

exports.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated() && verifyJWT) return next();
    res.redirect("/secure/logout");
}

exports.loggedinSuccess = function (req, res) {
    const userId = req.user._id;
    let token = jwt.sign({ userId }, process.env.SECRET, {
        expiresIn: '1d'
    });
    res.setHeader('Set-Cookie', [`x-access-token=${token}`]);
    return res.json({ auth: true, token: token });
}

exports.logout = function (req, res, next) {
    req.logout();
    res.setHeader('Set-Cookie', [`x-access-token=''`]);
    res.redirect('/secure/login');
}

passport.serializeUser(function (username, done) {
    done(null, username.id);
});

passport.deserializeUser(function (id, done) {
    repository.getUserById(id, function (err, username) {
        done(err, username);
    });
});

passport.use(new LocalStrategy(async (username, password, done) => {
    const data = await repository.getUserByUsername(username, function (err, admin) {
        if (err) throw err;
        if (!admin) {
            return done(null, false, { message: 'Usuário ou senha não existentem.' });
        }

        repository.comparePassword(password, admin.password, function (err, isMatch) {
            if (err) return done(err);
            if (isMatch) {
                return done(null, admin);
            } else {
                return done(null, false, { message: 'Usuário ou senha inválidos.' });
            }
        });
    });
}));



// create
// exports.create = async (req, res) => {
//     const { errors } = validationResult(req);

//     if (errors.length > 0) {
//         return res.status(400).send({ message: errors })
//     }

//     try {
//         await repository.create({
//             name: req.body.name,
//             email: req.body.email,
//             subject: req.body.subject,
//             message: req.body.message
//         });
//         return res.status(201).send({ message: 'Contact successfully registered!' });
//     } catch (e) {
//         return res.status(500).send({ message: 'Failed to register contact.' });
//     }
// };