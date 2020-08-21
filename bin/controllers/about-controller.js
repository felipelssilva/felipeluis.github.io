const repository = require('../repositories/about-repository');

exports.list = async (req, res) => {
    try {
        const data = await repository.list();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Failed to load about me!' });
    }
};

exports.details = async (req, res) => {
    try {
        const data = await repository.details(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ error: true, message: 'Failed to load the about me!' });
    }
};

exports.saving = async (req, res) => {
    try {
        await repository.saving({
            description: req.body.description
        });
        res.status(200).send({ message: `About me (${req.body.description}) successfully updated!` });
    } catch (e) {
        res.status(500).send({ message: 'Failed to save the about me! - ' + e });
    }
};
