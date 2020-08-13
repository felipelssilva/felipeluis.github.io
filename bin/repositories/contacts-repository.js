const mongoose = require('mongoose');
const Contacts = mongoose.model('Contacts');

exports.list = async () => {
  const res = await Contacts.find({}, 'name email subject message date');
  return res;
};

exports.details = async (id, callback) => {
  const res = Contacts.findById(id, callback);
  return res;
}

exports.create = async data => {
  const contacts = new Contacts(data);
  await contacts.save();
};