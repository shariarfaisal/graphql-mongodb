const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const socialSchema = new Schema({
  ownar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  socials: [{
    name: {
      type: String,
      required: true,
      max: 556
    },
    link: {
      type: String,
      max: 556
    }
  }]
})

module.exports = mongoose.model('social',socialSchema);
