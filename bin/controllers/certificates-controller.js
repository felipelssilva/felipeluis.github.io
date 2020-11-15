const { validationResult } = require('express-validator');
const repository = require('../repositories/certificates-repository');
const { LOG } = require('../services/log');

exports.list = async (req, res) => {
    try {
        const data = await repository.list();
        LOG('List certificates successfully');
        return res.status(200).send(data);
    } catch (e) {
        LOG('Failed to load certificates');
        return res.status(500).send({ message: 'Failed to load certificates!' });
    }
};

exports.page = async (req, res) => {
    try {
        const data = await repository.page();
        LOG('Page certificates successfully');
        return res.status(200).send(data);
    } catch (e) {
        LOG('Failed to load page certificates');
        return res.status(500).send({ message: 'Failed to load certificates!' });
    }
};

exports.details = async (req, res) => {
    try {
        const data = await repository.details(req.params.id);
        LOG('Details certificates successfully');
        return res.status(200).send(data);
    } catch (e) {
        LOG('Failed to load details certificates');
        return res.status(500).send({ error: true, message: 'Failed to load the certificates info!' });
    }
};

exports.saving = async (req, res) => {
    try {
        let data = {};

        if(req.body.img) {
            data = {
                id: req.params.id,
                name: req.body.name,
                url: req.body.url,
                description: req.body.description,
                img: req.body.img,
                order: req.body.order,
                updated_at: Date.now()
            };
        } else {
            data = {
                id: req.params.id,
                name: req.body.name,
                url: req.body.url,
                description: req.body.description,
                order: req.body.order,
                updated_at: Date.now()
            };
        }

        await repository.saving(data);

        LOG(`Certificates (${req.body.name}) successfully updated!`);
        return res.status(200).send({ message: `Certificates (${req.body.name}) successfully updated!` });
    } catch (e) {
        LOG('Failed to save the certificates info! - ' + e);
        return res.status(500).send({ message: 'Failed to save the certificates info! - ' + e });
    }
};

exports.delete = async (req, res) => {
    try {
        await repository.saving({
            id: req.params.id,
            updated_at: Date.now(),
            deleted_at: Date.now()
        });
        LOG('Certificates successfully deleted');
        return res.status(200).send({ message: `Certificates successfully deleted!` });
    } catch (e) {
        LOG('Failed to delete the Certificates');
        return res.status(500).send({ message: 'Failed to delete the Certificates!' });
    }
};

exports.create = async (req, res) => {
    const { errors } = validationResult(req);

    if (errors.length > 0) {
        return res.status(400).send({ message: errors })
    }

    try {
        let data = {};

        if(req.body.img) {
            data = {
                name: req.body.name,
                url: req.body.url,
                description: req.body.description,
                img: req.body.img,
                order: req.body.order,
                created_at: Date.now()
            };
        } else {
            data = {
                name: req.body.name,
                url: req.body.url,
                description: req.body.description,
                order: req.body.order,
                created_at: Date.now()
            };
        }

        await repository.create(data);

        LOG('Certificate successfully registered!');
        return res.status(201).send({ message: 'Certificate successfully registered!' });

    } catch (e) {
        LOG('Failed to register certificate.');
        return res.status(500).send({ message: 'Failed to register certificate.' });
    }
};