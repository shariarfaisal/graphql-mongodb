const { GraphQLServer } = require('graphql-yoga');
const typeDefs = require('./typeDefs')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation/index')
const Post = require('./resolvers/Post')
const User = require('./resolvers/User')
const jwt = require('jsonwebtoken')
const jwtDecode = require('jwt-decode')
const mongoose = require('mongoose')
// const {AuthenticationError} = require('apollo-server-core')

mongoose.connect(
  'mongodb://localhost:27017/gym',
  {useNewUrlParser: true},
  () => {
  console.log('Database connection established...');
})

const server = new GraphQLServer({
  typeDefs,
  resolvers:{
    Query,
    Mutation,
    Post,
    User
  },
  context: req => {
    const {request} = req;
    const userToken = request.get('user-token') || '';
    const user = userAuth(userToken)
    return {user}
  }
})

const userAuth = (token) => {
  if(token === ''){
    return {error: "You are not authenticated"}
  }
  try{
    let userDecode ;
    if(token){
      userDecode = jwtDecode(token,'faisal')
    }
    const user = userDecode ? userDecode : {}
    return user;
  }catch(err){
    return {error: "You are not authorized"}
  }
}

// server.express.use((req, res, next) => {
//   next()
// })

server.start({port: 7777}, () => console.log(`The server is running on port 7777`))
