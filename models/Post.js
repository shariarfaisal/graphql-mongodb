const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    max: 255
  },
  description: {
    type: String,
    required: true,
    max: 5000
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,ref: 'user'
  },
  time: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('post',postSchema);
