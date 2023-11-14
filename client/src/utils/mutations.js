import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
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

export const ADD_PROJECT = gql`
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

export const ADD_USER = gql`
  mutation addUser(
    $name: String! 
    $email: String! 
    $password: String! 
    $role: String!
  ) {
  addUser(
    name: $name 
    email: $email 
    password: $password 
    role: $role
  ) {
    user {
      _id
      name
    }
    token
  }
}
`;