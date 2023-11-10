export const LOGIN_USER = `#graphql
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                name
            }
        }
    }
`;

export const ADD_PROJECT = `#graphql
  mutation addProject($userId: ID!, $name: String!, $features: [FeatureInput!]!) {
    addProject(userId: $userId, name: $name, features: $features) {
      id
      name
      features {
        id
        name
      }
    }
  }
`;

export const ADD_USER = `#graphql
mutation AddUser($name: String!, $email: String!, $password: String!, $role: String!) {
  addUser(name: $name, email: $email, password: $password, role: $role) {
    user {
      id
      name
      email
      role
    }
    token
  }
}
`;
