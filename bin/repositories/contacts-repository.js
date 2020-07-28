const mongoose = require('mongoose');
const Contacts = mongoose.model('Contacts');

exports.list = async () => {
  const res = await Contacts.find({}, 'name email subject message -_id');
  return res;
};

exports.create = async data => {
  const mention = new Contacts(data);
  await mention.save();
};