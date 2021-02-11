const express = require('express');
const router = express.Router();
const path = require('path')
const nomeApp = process.env.npm_package_name

router
    .get('/',
        (req, res, next) => {
            res.sendFile(path.resolve(`dist/${nomeApp}/browser/index.html`))
        })
    .get('/home',
        (req, res, next) => {
            res.sendFile(path.resolve(`dist/${nomeApp}/browser/index.html`))
        })
    .get('/about-me',
        (req, res, next) => {
            res.sendFile(path.resolve(`dist/${nomeApp}/browser/index.html`))
        })
    .get('/social-medias',
        (req, res, next) => {
            res.sendFile(path.resolve(`dist/${nomeApp}/browser/index.html`))
        })
    .get('/my-projects',
        (req, res, next) => {
            res.sendFile(path.resolve(`dist/${nomeApp}/browser/index.html`))
        })
    .get('/blog',
        (req, res, next) => {
            res.sendFile(path.resolve(`dist/${nomeApp}/browser/index.html`))
        })
    .get('/blog/*',
        (req, res, next) => {
            res.sendFile(path.resolve(`dist/${nomeApp}/browser/index.html`))
        })
    .get('/contact',
        (req, res, next) => {
            res.sendFile(path.resolve(`dist/${nomeApp}/browser/index.html`))
        });

module.exports = router;