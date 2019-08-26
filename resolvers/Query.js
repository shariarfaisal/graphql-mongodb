const User = require('../models/User')
const Post = require('../models/Post')
const Category = require('../models/Category')
const Skill = require('../models/Skill');
const { GraphQLServer } = require('graphql-yoga');

const Query = {
  async user(parent,args,{request},info){
    // const isAuth = request.headers.get()
    const user = await User.find().select('-password')
    if(!user) throw new Error("Something is wrong!")
    if(args.id) return user.filter(i => i._id == args.id)
    return user
  },
  async post(parent,args,ctx,info){
    const posts = await Post.find()
    if(!posts) throw new Error("Something wrong")
    if(args.id){
      return posts.filter(i => i._id === args.id)
    }
    return posts
  },
  async category(parent,args,ctx,info){
    const categories = await Category.find()
    if(!categories) throw new Error("Something wrong")
    if(args.id) return categories.filter(i => i._id === args.id)
    return categories
  },
  async skill(parent,args,{user},info){
    if(user.error) throw new Error(user.error)
    const skills = await Skill.find();
    if(!skills) throw new Error("Something wrong")
    return skills;
  },
  async skillById(parent,args,ctx,info){
    const skill = await Skill.findById(args.id);
    return skill;
  }
}

module.exports = Query
