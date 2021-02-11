const express = require('express');
const router = express.Router();
const path = require('path')
const nomeApp = process.env.npm_package_name
const DEFAULT_PATH = `dist/${nomeApp}/browser/index.html`

router
    .get('/',
        (req, res, next) => {
            res.sendFile(path.resolve(DEFAULT_PATH))
        })
    .get('/home',
        (req, res, next) => {
            res.sendFile(path.resolve(DEFAULT_PATH))
        })
    .get('/about-me',
        (req, res, next) => {
            res.sendFile(path.resolve(DEFAULT_PATH))
        })
    .get('/social-medias',
        (req, res, next) => {
            res.sendFile(path.resolve(DEFAULT_PATH))
        })
    .get('/my-projects',
        (req, res, next) => {
            res.sendFile(path.resolve(DEFAULT_PATH))
        })
    .get('/blog',
        (req, res, next) => {
            res.sendFile(path.resolve(DEFAULT_PATH))
        })
    .get('/blog/*',
        (req, res, next) => {
            res.sendFile(path.resolve(DEFAULT_PATH))
        })
    .get('/contact',
        (req, res, next) => {
            res.sendFile(path.resolve(DEFAULT_PATH))
        });

module.exports = router;