const userMutation = require('./user')
const postMutation = require('./post')
const categoryMutation = require('./category')
const skillMutation = require('./skill')
const Mutation = {
  ...userMutation,
  ...postMutation,
  ...categoryMutation,
  ...skillMutation
}

module.exports = Mutation
