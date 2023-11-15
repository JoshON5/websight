import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query getUsers {
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
  query getUser {
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
export const GET_PROJECT = gql`
  query getProject($projectId: ID!) {
    project(projectId: $projectId) {
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
`