const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 20
  },
  body: {
    type: String,
    required: true,
    max: 256
  }
})

module.exports = reviewSchema
