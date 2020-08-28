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
            id: req.params.id,
            description: req.body.description,
            updated_at: Date.now()
        });
        res.status(200).send({ message: `About me successfully updated!` });
    } catch (e) {
        res.status(500).send({ message: 'Failed to save the about me! - ' + e });
    }
};
