const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const schema = new Schema({
  usernames: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = module.exports = mongoose.model('admins', schema);

module.exports.getUserById = function (id, callback) {
  Admin.findById(id, callback);
}

module.exports.getUserByUsername = function (username, callback) {
  var query = { username: username };
  Admin.findOne(query, callback);
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    callback(null, isMatch);
  });
}

//authenticate input against database
// module.exports.authenticate = function (username, password, callback) {
//   Admin.findOne({ username: username })
//     .exec(function (err, user) {
//       if (err) {
//         return callback(err)
//       } else if (!user) {
//         var err = new Error('User not found.');
//         err.status = 401;
//         return callback(err);
//       }
//       bcrypt.compare(password, user.password, function (err, result) {
//         if (result === true) {
//           return callback(null, user);
//         } else {
//           return callback();
//         }
//       })
//     });
// }

// authenticate
// serializeUser
// deserializeUser