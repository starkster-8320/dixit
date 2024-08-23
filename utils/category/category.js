const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  id: { type: String, required: true },
  categoryname: {type: String, required: true},
  status: { type: String, enum: ['active', 'inactive'], default: 'active' ,required: true}
});

module.exports = mongoose.model('User', UserSchema);