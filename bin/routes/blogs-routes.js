const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const blogsController = require('../controllers/blogs-controller');
const { verifyJWT } = require('../auth');

//.get('/:permalink', blogsController.detailsByPermalink)

router
    .get('/', blogsController.page)
    .get('/lasts-posts', blogsController.lastsPosts)
    .get('/:id', blogsController.details)
    .get('/:id/edit', verifyJWT, blogsController.details)
    .delete('/:id', verifyJWT, blogsController.delete)
    .put('/:id/save', verifyJWT, [
        check('title')
            .isLength({ min: 4 })
            .withMessage("O titulo do blog precisa ter pelo menos 4 letras"),
        check('content')
            .isLength({ min: 20 })
            .withMessage("O conteúdo do blog precisa ter pelo menos 20 caracteres")
    ], blogsController.saving)
    .put('/add', verifyJWT, [
        check('title')
            .isLength({ min: 4 })
            .withMessage("O titulo do blog precisa ter pelo menos 4 letras"),
        check('content')
            .isLength({ min: 20 })
            .withMessage("O conteúdo do blog precisa ter pelo menos 20 caracteres")
    ], blogsController.create);

module.exports = router;