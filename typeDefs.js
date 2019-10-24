const typeDefs = `
  scalar Upload
  
  type Query {
    users: [User!]!
    profile(username: String,id: ID): User!
  }

  type Mutation{
    registerUser(data: CreateRegisterInput): Boolean!
    loginUser(username: String!,password: String!): String!
    updateUser(data:CreateUpdataRegisterInput): User!
    deleteUser(id: ID!,password: String!): User!

    createSkill(data:CreateSkillInput): Skill!
    updateSkill(data: UpdateSkillInput): Skill!
    deleteSkill(id: ID!,ownar: ID!): Skill!

    createSocial(data: CreateSocialInput): Social!
    updateSocial(data: UpdateSocialInput): Social!
    deleteSocial(id: ID!,ownar: ID!): Social!

    createService(ownar: ID!,name: String!,details: String!): Service!
    updateService(id: ID!,ownar: ID!,name: String!,details: String!): Service!
    deleteService(id: ID!,ownar: ID!): Service!

    createReview(ownar: ID!,name: String!,body: String!): Review!
    updateReview(id: ID!,ownar: ID!,name: String!,body: String!): Review!

    singleUpload(file: Upload!): File!
  }

  type File{
    filename: String!
    mimetype: String!
    encoding: String!
  }

  input CreateSocialInput{
    ownar: ID!
    name: String!
    link: String!
  }

  input UpdateSocialInput{
    id: ID!
    ownar: ID!
    name: String!
    link: String!
  }

  input CreateSkillInput{
    ownar: ID!
    name: String!
    level: String!
  }

  input UpdateSkillInput{
    ownar: ID!
    id: ID!
    name: String!
    level: String
  }

  input CreateRegisterInput{
    firstname: String!
    lastname: String!
    username: String!
    short_info: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  input CreateUpdataRegisterInput{
    _id: ID!
    firstname: String!
    lastname: String!
    username: String!
    short_info: String!
    email: String!
    password: String!
  }

  type User{
    _id: ID!
    firstname: String!
    lastname: String!
    username: String!
    short_info: String
    about: About
    email: String!
    skills: [Skill!]
    works: [Work!]
    socials: [Social!]
    gallery: [Gallery!]
    services: [Service!]
    reviews: [Review!]
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
    body: String!
  }

`
module.exports = typeDefs
