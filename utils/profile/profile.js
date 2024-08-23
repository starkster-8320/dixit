const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  group: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);