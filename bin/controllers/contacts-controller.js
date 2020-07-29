const { validationResult } = require('express-validator');
const repository = require('../repositories/contacts-repository');

// list
exports.list = async (req, res) => {
    try {
        const data = await repository.list();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Failed to load contacts!' });
    }
};

exports.details = async (req, res) => {
    try {
        const data = await repository.details(req.param('id'));
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Failed to load the contact info!' });
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
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        });
        return res.status(201).send({ message: 'Contact successfully registered!' });
    } catch (e) {
        return res.status(500).send({ message: 'Failed to register contact.' });
    }
};