const express = require('express');
const { verifyJWT } = require('../auth');
const router = express.Router();
const multer = require('multer');
const { uuid } = require("uuidv4");
const permalink = (title) => {
  return title.replace(/ /g, '-').replace(/[^\w\s.]/gi, '-').toLowerCase();
};

const upload = multer({ 
  storage: multer.diskStorage({
    destination: 'dist/felipeluis/assets/img/uploads/',
    filename(req, file, callback) {
      const fileName = `${uuid()}-${permalink(file.originalname)}`;
      return callback(null, fileName);
    },
  }),
});

router.get('/', verifyJWT, (req, res, next) => {
  res.status(200).send({
    title: 'API',
    version: '1.0.0'
  });
});

router.post('/upload/image', upload.single('image'), (req, res) => {
  const { filename, mimetype } = req.file;

  res.status(200).send({
    message: 'Upload realizado com sucesso',
    image_url: `/assets/img/uploads/${filename}`,
  });
});

module.exports = router;