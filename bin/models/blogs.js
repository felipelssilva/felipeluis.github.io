const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  permalink: {
    type: String,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Blogs', schema);