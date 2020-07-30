const { validationResult } = require('express-validator');
const repository = require('../repositories/blogs-repository');

// list
exports.list = async (req, res) => {
    try {
        const data = await repository.list();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Failed to load blogs!' });
    }
};

exports.details = async (req, res) => {
    try {
        const data = await repository.details(req.param('id'));
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Failed to load the blogs info!' });
    }
};

// create
exports.create = async (req, res) => {
    const { errors } = validationResult(req);

    if (errors.length > 0) {
        return res.status(400).send({ message: errors })
    }

    try {
        await repository.create({
            title: req.body.title,
            permalink: this.permalink(req.body.title),
            content: req.body.content,
            created_at: Date.now()
        });
        return res.status(201).send({ message: 'Blogs successfully registered!' });
    } catch (e) {
        return res.status(500).send({ message: 'Failed to register blog.' });
    }
};

exports.permalink = (title) => {
    title = title.replace(/ /g, '-');
    title = title.replace(/[^\w\s]/gi, '-');
    return title;
};