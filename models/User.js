const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    max: 20,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    max: 20,
    trim: true
  },
  short_info: {
    type: String,
    required: true,
    max: 200,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 200
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.methods.createToken = function(){
  return jwt.sign({_id: this._id,email: this.email},'faisal')
}

module.exports = mongoose.model('user',userSchema);
