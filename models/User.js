const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 200
  },
  phone: {
    type: String
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('user',userSchema);
