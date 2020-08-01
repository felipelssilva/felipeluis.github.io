const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const blogsController = require('../controllers/blogs-controller');

router
    .get('/', blogsController.page)
    .get('/:id', blogsController.details)
    .get('/:id/edit', blogsController.details)
    .put('/:id/save', [
        check('title')
            .isLength({ min: 4 })
            .withMessage("O titulo do blog precisa ter pelo menos 4 letras"),
        check('content')
            .isLength({ min: 20 })
            .withMessage("O conteúdo do blog precisa ter pelo menos 20 caracteres")
    ], blogsController.saving)
    .delete('/:id/delete', blogsController.delete)
    .put('/add', [
        check('title')
            .isLength({ min: 4 })
            .withMessage("O titulo do blog precisa ter pelo menos 4 letras"),
        check('content')
            .isLength({ min: 20 })
            .withMessage("O conteúdo do blog precisa ter pelo menos 20 caracteres")
    ], blogsController.create);

module.exports = router;