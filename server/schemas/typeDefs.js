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
  features: [Feature]
}

type Feature {
  name: String!
}

type Auth {
  token: String!
  user: User!
}

type Query {
  users: [User]!
  projects(user: ID, name: String): [Project]!
}

type Mutation {
  addUser(name: String!, email: String!, password:String!, role: String!): Auth!
  addProject(userId: ID!, name: String!, features: [FeatureInput!]!): Project!
}

input FeatureInput {
  name: String!
}
`;

module.exports = typeDefs;