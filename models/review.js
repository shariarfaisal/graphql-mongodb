const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  ownar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  reviews: [{
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
  }]
})

module.exports = mongoose.model('review',reviewSchema);
