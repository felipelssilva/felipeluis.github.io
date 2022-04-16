const express = require('express');
const router = express.Router();
const path = require('path');
const DEFAULT_PATH = `./dist/felipeluis/browser/index.html`;

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
