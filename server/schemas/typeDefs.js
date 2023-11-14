const typeDefs = `#graphql 
type User {
  _id: ID!
  name: String!
  email: String!
  role: String!
  projects: [Project]
}

type Project {
  _id: ID!
  name: String!
  features: [Feature]
  remark: [Remark]
  accepted: Boolean
}

type Remark {
  _id: ID!
  remarkText: String!
  remarkAuthor: String!
}

type Feature {
  name: String!
}

type Auth {
  token: ID
  user: User
}

type Query {
  users: [User]
  projects(user: ID, name: String): [Project]
  user: User
}

type Mutation {
  addUser(name: String!, email: String!, password: String!, role: String!): Auth
  login(email: String!, password: String!): Auth
  addProject(userId: ID!, name: String!, features: [FeatureInput!]!): Project
  addRemark(projectId: ID!, remarkText: String!): Project
}

input FeatureInput {
  name: String!
}
`;

module.exports = typeDefs;