const userMutation = require('./user')
const skillMutation = require('./skill')
const socialMutation = require('./social')
const serviceMutation = require('./service')
const reviewMutation = require('./review')

const Mutation = {
  ...userMutation,
  ...skillMutation,
  ...socialMutation,
  ...serviceMutation,
  ...reviewMutation,
  async singleUpload(parent,{file},ctx,info){
    const {stream,filename,mimetype,encoding} = await file
    console.log(filename);
    
  }
}

module.exports = Mutation
