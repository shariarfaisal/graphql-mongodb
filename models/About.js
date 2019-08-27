const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
  ownar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  body: {
    type: String,
    max: 2000,
    trim: true
  },
  image: {
    type: String,
    max: 200
  },
  school: {
    type: String,
    trim: true,
    max: 100

  },
  college: {
    type: String,
    trim: true,
    max: 100

  },
  website: {
    type: String,
    trim: true,
    max: 100

  }
})

module.exports = mongoose.model('about',aboutSchema)
