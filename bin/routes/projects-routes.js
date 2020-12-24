const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const projectsController = require('../controllers/projects-controller');
const { verifyJWT } = require('../auth');

router
    .get('/', projectsController.page)
    .get('/:id', projectsController.details)
    .get('/:id/edit', verifyJWT, projectsController.details)
    .delete('/:id', verifyJWT, projectsController.delete)
    .put('/:id/save', verifyJWT, [
        check('name')
            .isLength({ min: 4 })
            .withMessage("O Nome do projeto precisa ter pelo menos 4 letras"),
        check('url')
            .isLength({ min: 4 })
            .withMessage("A URL do projeto precisa ter pelo menos 4 letras"),                      
        check('description')
            .isLength({ min: 4 })
            .withMessage("O conteúdo do projeto precisa ter pelo menos 4 caracteres")
    ], projectsController.saving)
    .put('/add', verifyJWT, [
        check('name')
            .isLength({ min: 4 })
            .withMessage("O Nome do projeto precisa ter pelo menos 4 letras"),
        check('url')
            .isLength({ min: 4 })
            .withMessage("A URL do projeto precisa ter pelo menos 4 letras"),                       
        check('description')
            .isLength({ min: 4 })
            .withMessage("O conteúdo do projeto precisa ter pelo menos 4 caracteres")
    ], projectsController.create);    

module.exports = router;