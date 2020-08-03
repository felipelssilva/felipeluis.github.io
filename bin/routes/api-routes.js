const express = require('express');
const verifyJWT = require('../auth');
const router = express.Router();

router.get('/', verifyJWT, (req, res, next) => {
  res.status(200).send({
    title: 'API',
    version: '1.0.0'
  });
});

module.exports = router;