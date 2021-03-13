const mongoose = require('mongoose');
const Projects = mongoose.model('Projects');

exports.list = async() => {
    const res = await Projects
        .find({ deleted_at: { $exists: false } }, 'name description url img released deleted_at created_at')
        .sort([
            ['released', -1],
            ['created_at', -1]
        ]);
    return res;
};

exports.page = async() => {
    const res = await Projects
        .find({ deleted_at: { $exists: false } }, 'name description url img released created_at updated_at deleted_at')
        .sort([
            ['released', -1],
            ['created_at', -1]
        ]);
    return res;
};

exports.details = async(id, callback) => {
    const res = await Projects.findById(id, callback);
    return res;
}

exports.saving = async(data, callback) => {
    const query = { _id: data.id };
    const res = await Projects.findOneAndUpdate(query, data, callback);
    return res;
}

exports.create = async data => {
    const projects = new Projects(data);
    await projects.save();
};