const express = require('express');
const { verifyJWT } = require('../auth');
const router = express.Router();
const uploadController = require('../controllers/upload-controller');

router
  .get('/', verifyJWT, (req, res, next) => {
    res.status(200).send({
      title: 'API',
      version: '1.0.0'
    });
  })
  .post('/upload/image', uploadController.multer.single('image'), uploadController.sendUpload);

module.exports = router;