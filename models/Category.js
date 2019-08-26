const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name:{
    type: String,
    max: 50,
    required: true,
    trim: true
  }

})

module.exports = mongoose.model('category',categorySchema);
