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
   mutation addProject(
    $userId: ID!, 
    $name: String!,
    $description: String!, 
    $features: [FeatureInput!]!
    ) {
      addProject(
      userId: $userId, 
      name: $name, 
      features: $features,
      description: $description
      ) {
        _id
        name
        description
        features {
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

export const ADD_REMARK = gql`
mutation addRemark($projectId: ID!, $remarkText: String!) {
  addRemark(projectId: $projectId, remarkText: $remarkText) {
    _id
    remark {
      remarkText
      remarkAuthor
    }
  }
}
`;