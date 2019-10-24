const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 20,
    trime: true
  },
  level: {
    type: String,
    required: true,
    max: 4
  }
})

module.exports = skillSchema
