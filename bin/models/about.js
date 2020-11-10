const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  description: {
    type: String,
    required: true
  },
  updated_at: {
    type: Date
  }
});

module.exports = mongoose.model('Abouts', schema);