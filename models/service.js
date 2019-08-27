const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  ownar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  services: [{
    name: {
      type: String,
      required: true,
      max: 99
    },
    details: {
      type: String,
      max: 5000
    }
  }]
})

module.exports = mongoose.model('service',serviceSchema);
