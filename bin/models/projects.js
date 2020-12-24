const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  img: {
    type: String
  },
  url: {
    type: String,
    required: true,
    trim: true
  },
  released: {
    type: Boolean,
    required: true,
    trim: true
  },
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date
  },
  deleted_at: {
    type: Date
  }
});

module.exports = mongoose.model('Projects', schema);