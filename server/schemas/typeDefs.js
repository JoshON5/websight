const typeDefs = `#graphql 
type User {
  _id: ID!
  name: String!
  email: String!
  password:String!
  role: String!
  projects: [Project]
}

type Project {
  _id: ID!
  name: String!
  features: [String!]
}

type Auth {
  token: String!
  user: User!
}

type Query {
  projects: [Project]!
}

type Mutation {
  addUser(name: String!, email: String!, password:String!, role: String!): Auth!
  addProject(projects: ProjectInput!): Project!
}

input ProjectInput {
  name: String!
  description: String!
}`;

module.exports = typeDefs;