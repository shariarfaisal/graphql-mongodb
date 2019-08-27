const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
  ownar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  galleries:[{
    title: {
      type: String,
      required: true,
      max: 100
    },
    image: {
      type: String,
      requried: true,
      max: 255
    }
  }]
})

module.exports = mongoose.model('gallery',gallerySchema)
