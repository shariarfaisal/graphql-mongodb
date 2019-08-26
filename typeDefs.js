const typeDefs = `
  type Query {
    user(id: ID): [User!]!
    post(id: ID): [Post!]!
    category(id: ID): [Category!]!
    skill: [Skill!]!
    skillById(id: ID!): Skill!
  }

  type Category{
    _id: ID!
    name: String!
  }

  type Skill{
    _id: ID!
    name: String!
    level: String!
  }

  type User{
    _id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }

  type Post{
    _id: ID!
    title: String!
    description: String!
    author: User!
    time: String!
  }

  type Mutation{
    registerUser(name: String!,email: String!,password: String!): Boolean!
    loginUser(email: String!,password: String!): String!
    updateUser(_id: ID!,name: String!,email: String!,password: String!): User!
    deleteUser(id: ID!): User!

    createPost(title: String!,description: String!,author: ID!): Post!
    updatePost(id: ID!,title: String!,description: String!,author: ID!): Post!
    deletePost(id: ID!,author: ID!): Post!

    createCategory(name: String!): Category!
    updateCategory(id: ID!,name: String!): Category!
    deleteCategory(id:ID!): Category!

    createSkill(name: String!,level: String!): Skill!
    updateSkill(id: ID!,name: String!,level: String!): Skill!
    deleteSkill(id: ID!): Skill!
  }


`
module.exports = typeDefs
