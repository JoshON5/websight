import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query GetUsers {
    users {
      _id
      name
      email
      password
      role
      projects {
        _id
        name
        description
        features {
          name
        }
        remark {
          _id
          remarkText
          remarkAuthor
        }
        accepted
      }
    }
  }
`
export const GET_USER = gql`
  query GetUser {
  user {
    _id
    name
    email
    role
    projects {
      _id
      name
      description
      features {
        name
      }
      remark {
        _id
        remarkText
        remarkAuthor
      }
      accepted
    }
  }
}
`