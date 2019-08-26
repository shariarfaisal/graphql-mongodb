const Post = require('../../models/Post')
const User = require('../../models/User')
module.exports = {
  async createPost(parent,{title,description,author},ctx,info){
    const match = await User.findById(author);
    if(!match) throw new Error("Author not found")
    const post = await new Post({title,description,author})
    if(!post) throw new Error("Something wrong")
    await post.save()
    return post
  },
  async updatePost(parent,args,ctx,info){
    const {id,title,description,author} = args
    let post = await Post.findById(id)
    if(!post) throw new Error("Post not found")
    const user = await User.findById(author)
    if(!user) throw new Error("Author not found")
    if(post.author.toString() !== author) throw new Error("You are not author")
    const updatedPost = await Post.findByIdAndUpdate(id,{$set: {title,description}},{new: true})
    if(!updatedPost) throw new Error("Something wrong")
    return updatedPost
  },
  async deletePost(parent,{id,author},ctx,info){
    const post = await Post.findById(id)
    if(!post) throw new Error("Post not found")
    const user = await User.findById(author)
    if(!user) throw new Error("Author not found")
    if(post.author.toString() !== author) throw new Error("You are not author")
    const deletedPost = await Post.findByIdAndDelete(id);
    if(!deletedPost) throw new Error("Something wrong")
    return deletedPost;
  }
}
