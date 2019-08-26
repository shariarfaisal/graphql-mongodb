const Post = require('../models/Post')

const User = {
  async posts(parent,args,ctx,info){
    let posts = await Post.find()
    return posts.filter(post => {
      return post.author.toString() === parent._id.toString()
    })
  }
}

module.exports = User
