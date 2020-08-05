const mongoose = require('mongoose');
const Blogs = mongoose.model('Blogs');

exports.list = async () => {
  const res = await Blogs.find({}, 'title permalink content short_content created_at updated_at deleted_at');
  return res;
};

exports.page = async () => {
  const res = await Blogs
    .find({ deleted_at: { $exists: false } }, 'title permalink short_content created_at updated_at deleted_at')
    .sort([['created_at', -1]]);
  return res;
};

exports.details = async (id, callback) => {
  const res = await Blogs.findById(id, callback);
  return res;
}

// exports.detailsByPermalink = async (data, callback) => {
//   const query = { permalink: data.permalink };
//   const res = await Blogs.find(query, callback);
//   return res;
// }

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