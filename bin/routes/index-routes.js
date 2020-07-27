const express = require('express');
const router = express.Router();
const path = require('path')
const nomeApp = process.env.npm_package_name

router.get('/', (req, res, next) => {
  res.sendFile(path.resolve(`dist/${nomeApp}/index.html`))
});

router.get('/home', (req, res, next) => {
  res.sendFile(path.resolve(`dist/${nomeApp}/index.html`))
});

router.get('/about-me', (req, res, next) => {
  res.sendFile(path.resolve(`dist/${nomeApp}/index.html`))
});

router.get('/social-medias', (req, res, next) => {
  res.sendFile(path.resolve(`dist/${nomeApp}/index.html`))
});

router.get('/my-projects', (req, res, next) => {
  res.sendFile(path.resolve(`dist/${nomeApp}/index.html`))
});

router.get('/blog', (req, res, next) => {
  res.sendFile(path.resolve(`dist/${nomeApp}/index.html`))
});

router.get('/blog/*', (req, res, next) => {
  res.sendFile(path.resolve(`dist/${nomeApp}/index.html`))
});

router.get('/contact', (req, res, next) => {
  res.sendFile(path.resolve(`dist/${nomeApp}/index.html`))
});

module.exports = router;