const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const aboutController = require('../controllers/about-controller');
const { verifyJWT } = require('../auth');

router
    .get('/', aboutController.list)
    .get('/:id/edit', verifyJWT, aboutController.details)
    .put('/:id/save', verifyJWT, aboutController.saving);

module.exports = router;