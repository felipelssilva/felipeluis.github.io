const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const certificatesController = require('../controllers/certificates-controller');
const { verifyJWT } = require('../auth');

router
    .get('/', certificatesController.page)
    .get('/:id', certificatesController.details)
    .get('/:id/edit', verifyJWT, certificatesController.details)
    .delete('/:id', verifyJWT, certificatesController.delete)
    .put('/:id/save', verifyJWT, [
        check('name')
            .isLength({ min: 4 })
            .withMessage("O Nome do certificado precisa ter pelo menos 4 letras"),
        check('url')
            .isLength({ min: 4 })
            .withMessage("A URL do certificado precisa ter pelo menos 4 letras"),                      
        check('description')
            .isLength({ min: 4 })
            .withMessage("O conteúdo do certificado precisa ter pelo menos 4 caracteres")
    ], certificatesController.saving)
    .put('/add', verifyJWT, [
        check('name')
            .isLength({ min: 4 })
            .withMessage("O Nome do certificado precisa ter pelo menos 4 letras"),
        check('url')
            .isLength({ min: 4 })
            .withMessage("A URL do certificado precisa ter pelo menos 4 letras"),                       
        check('description')
            .isLength({ min: 4 })
            .withMessage("O conteúdo do certificado precisa ter pelo menos 4 caracteres")
    ], certificatesController.create);    

module.exports = router;