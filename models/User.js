const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema;
const aboutSchema = require('./About')
const skillSchema = require('./Skill')
const gallerySchema = require('./Gallery')
const reviewSchema = require('./Review')
const serviceSchema = require('./Service')
const socialSchema = require('./Social')
const workSchema= require('./Work')

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
  username: {
    type: String,
    required: true,
    max: 99
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
  },
  about: aboutSchema,
  gallery: [gallerySchema],
  reviews: [reviewSchema],
  services: [serviceSchema],
  skills: [skillSchema],
  socials: [socialSchema],
  works: [workSchema]
})

userSchema.methods.createToken = function(){
  return jwt.sign({_id: this._id,email: this.email,username: this.username},'faisal')
}

module.exports = mongoose.model('user',userSchema);
