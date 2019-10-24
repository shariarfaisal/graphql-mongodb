const User = require('../models/User')
const Skill = require('../models/Skill');
const { GraphQLServer } = require('graphql-yoga');

const Query = {
  async users(parent,args,{user},info){
    if(!user._id) throw new Error(user.error)
    const users = await User.find().select('-password')
    if(!users) throw new Error("Something is wrong!")
    return users
  },
  async profile(parent,args,{user},info){
    if(!user._id) throw new Error(user.error)
    const profile = await User.findById(user._id).select('-password')
    return profile;
  }
}

module.exports = Query
