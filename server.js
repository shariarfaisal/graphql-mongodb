const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const graphqlHttp = require('express-graphql')
const bcrypt = require('bcryptjs')
const { buildSchema } = require('graphql')
const User = require('./models/User')
const Post = require('./models/Post')
const app = express();
app.use(bodyParser.json())

app.use('/graphql',graphqlHttp({
  schema: buildSchema(`

    type Post{
      _id: ID!
      title: String!
      description: String!
      author: User!
      time: String!
    }

    type User{
      _id: ID!
      name: String!
      email: String!
      phone: String!
    }

    input CreateUserInput{
      name: String!
      email: String!
      phone: String!
      password: String!
      confirmPassword: String!
    }

    input CreatePostInput{
      title: String!
      description: String!
      author: ID!
    }

    type RootQuery{
       user(_id: ID,email: String): [User!]!
       post(_id: ID): [Post!]!
    }

    type RootMutation{
      createUser(data: CreateUserInput): User!
      createPost(data: CreatePostInput): Post!
    }

      schema{
        query: RootQuery
        mutation: RootMutation
      }
    `),
  rootValue: {
    user: async (urgs) => {
      if(urgs._id){
        const user = await User.find({_id: urgs._id})
        return user
      }
      if(urgs.email){
        const user = await User.find({email: urgs.email})
        console.log(user);
        return user
      }
      
      let users = await User.find()
      return users
    },
    post: async (urgs) => {
      const posts = await Post.find().populate('author');
      return posts
    },
    createUser: async ({data}) => {
      const {name,email,phone,password,confirmPassword} = data
      if(password !== confirmPassword){
        throw new Error("Confirm password doesn't match!")
      }
      const match = await User.findOne({email});
      if(match){
        throw new Error("Email taken")
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password,salt);
      if(!hashedPassword){
        throw new Error("Hashing failed in createUser mutation")
      }
      const user = await new User({name,email,phone,password: hashedPassword})
      await user.save()
      if(!user) throw new Error("Something wrong")
      console.log(user);
      return user
    },
    createPost: async (urgs) => {
      console.log('ok');
      const {title,description,author} = urgs.data
      const authorExist = await User.findOne({_id: author});
      if(!authorExist){
        throw new Error("Author not found")
      }
      const post = await new Post({title,description,author});
      if(!post){
        throw new Error("Server error occured")
      }
      await post.save();
      const originalPost = await Post.findById(post._id).populate('author')
      console.log(originalPost);
      return originalPost
    }
  },
  graphiql: true
}))

mongoose.connect(
  'mongodb://localhost:27017/graphqlMongodb',
  {useNewUrlParser: true},
  () => {
  console.log('Database connection established...');
})

app.listen(2000,() => {
  console.log('server running on port 2000');
})
