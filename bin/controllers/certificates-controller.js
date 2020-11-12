const { validationResult } = require('express-validator');
const repository = require('../repositories/certificates-repository');
const formidable = require('formidable');
const fs = require('fs');

exports.list = async (req, res) => {
    try {
        const data = await repository.list();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Failed to load certificates!' });
    }
};

exports.page = async (req, res) => {
    try {
        const data = await repository.page();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Failed to load certificates!' });
    }
};

exports.details = async (req, res) => {
    try {
        const data = await repository.details(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ error: true, message: 'Failed to load the certificates info!' });
    }
};

exports.saving = async (req, res) => {
    try {
        await repository.saving({
            name: req.body.name,
            url: req.body.url,
            img: req.body.img,
            description: req.body.description,
            order: 1,
            updated_at: Date.now()
        });
        res.status(200).send({ message: `Certificates (${req.body.name}) successfully updated!` });
    } catch (e) {
        res.status(500).send({ message: 'Failed to save the certificates info! - ' + e });
    }
};

exports.delete = async (req, res) => {
    try {
        await repository.saving({
            id: req.params.id,
            updated_at: Date.now(),
            deleted_at: Date.now()
        });
        res.status(200).send({ message: `Certificates successfully deleted!` });
    } catch (e) {
        res.status(500).send({ message: 'Failed to delete the Certificates!' });
    }
};

exports.create = async (req, res) => {
    const { errors } = validationResult(req);

    if (errors.length > 0) {
        return res.status(400).send({ message: errors })
    }

    try {
        await repository.create({
            name: req.body.name,
            url: req.body.url,
            description: req.body.description,
            img: req.body.img,
            order: 1,
            created_at: Date.now()
        });

        return res.status(201).send({ message: 'Certificate successfully registered!' });

    } catch (e) {
        return res.status(500).send({ message: 'Failed to register certificate.' });
    }

};