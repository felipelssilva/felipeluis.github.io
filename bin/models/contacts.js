const mongoose = require('mongoose');
const { timeStamp } = require('console');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Contacts', schema);