const mongoose = require('mongoose');
const Certificates = mongoose.model('Certificates');

exports.list = async () => {
  const res = await Certificates
  .find({ deleted_at: { $exists: false } }, 'name description url img order deleted_at')
  .sort([['order', -1]]);
  return res;
};

exports.page = async () => {
  const res = await Certificates
    .find({ deleted_at: { $exists: false } }, 'name description url img order created_at updated_at deleted_at')
    .sort([['order']]);
  return res;
};

exports.details = async (id, callback) => {
  const res = await Certificates.findById(id, callback);
  return res;
}

exports.saving = async (data, callback) => {
  const query = { _id: data.id };
  const res = await Certificates.findOneAndUpdate(query, data, callback);
  return res;
}

exports.create = async data => {
  const certificates = new Certificates(data);
  await certificates.save();
};