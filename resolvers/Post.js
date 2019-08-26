const User = require('../models/User')
const Post = {
  async author(parent,args,ctx,info){
    const user = await User.findById(parent.author)
    return user
  }
}

module.exports = Post
