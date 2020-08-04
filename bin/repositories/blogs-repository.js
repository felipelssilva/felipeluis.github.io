const mongoose = require('mongoose');
const Blogs = mongoose.model('Blogs');

exports.list = async () => {
  const res = await Blogs.find({}, 'title permalink content created_at updated_at deleted_at');
  return res;
};

exports.page = async () => {
  const res = await Blogs.find({}, 'title permalink created_at updated_at deleted_at');
  return res;
};

exports.details = async (id, callback) => {
  const res = await Blogs.findById(id, callback);
  return res;
}

exports.saving = async (data, callback) => {
  const query = { _id: data.id };
  const res = await Blogs.findOneAndUpdate(query, data, callback);
  return res;
}

/*exports.delete = async (data, callback) => {
  const query = { _id: data.id };
  const res = await Blogs.findOneAndUpdate(query, data, callback);
  return res;
}*/

exports.create = async data => {
  const blogs = new Blogs(data);
  await blogs.save();
};