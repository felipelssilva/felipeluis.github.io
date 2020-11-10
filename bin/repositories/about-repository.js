const mongoose = require('mongoose');
const Abouts = mongoose.model('Abouts');

exports.list = async () => {
  const res = await Abouts.find({}, 'description updated_at');
  return res;
};

exports.details = async (id, callback) => {
  const res = await Abouts.findById(id, callback);
  return res;
}

exports.saving = async (data, callback) => {
  const query = { _id: data.id };
  const res = await Abouts.findOneAndUpdate(query, data, callback);
  return res;
}