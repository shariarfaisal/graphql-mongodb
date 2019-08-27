const typeDefs = `
  type Query {
    user(id: ID): [User!]!
  }

  type User{
    _id: ID!
    firstname: String!
    lastname: String!
    short_info: String
    about: About
    email: String!
    skills: [Skill!]
    works: [Work!]!
    social: [Social!]!
    gallery: [Gallery!]!
    services: [Service!]!
    reviews: [Review!]!
  }

  type Skill{
    _id: ID!
    name: String!
    level: String!
  }

  type About{
    image: String
    body: String
    school: String
    college: String
    website: String
  }

  type Work{
    _id: ID!
    title: String!
    image: String!
    source_link: String!
    view_link: String!
  }

  type Social{
    _id: ID!
    name: String!
    link: String!
  }

  type Gallery{
    _id: ID!
    title: String!
    image: String!
  }
  type Service{
    _id: ID!
    name: String!
    details: String!
  }
  type Review{
    _id: ID!
    name: String!
    message: String!
  }

  type Mutation{
    registerUser(firstname: String!,lastname: String!,short_info: String!,email: String!,password: String!): Boolean!
    loginUser(email: String!,password: String!): String!
    updateUser(_id: ID!,firstname: String!,lastname: String!,about: String!,email: String!,password: String!): User!
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
