const mongoose = require('mongoose');
const Blogs = mongoose.model('Blogs');

exports.list = async () => {
  const res = await Blogs.find({}, 'title permalink content date');
  return res;
};

exports.details = async (id, callback) => {
  const res = Blogs.findById(id, callback);
  return res;
}

exports.create = async data => {
  const blogs = new Blogs(data);
  await blogs.save();
};