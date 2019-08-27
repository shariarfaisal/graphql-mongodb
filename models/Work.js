const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workSchema = new Schema({
  ownar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  works:[{
    title: {
      type: String,
      required: true,
      max: 55,
      trim: true
    },
    image: {
      type: String,
      max: 556,
    },
    source_link: {
      type: String,
      max: 556,
    },
    view_link: {
      type: String,
      max: 556
    }
  }]
})

module.exports = mongoose.model('work',workSchema);
