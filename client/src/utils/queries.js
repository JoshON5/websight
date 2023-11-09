export const GET_USERS = `#graphql
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
        features {
          name
        }
        remarks {
          _id
          remarkText
          remarkAuthor
        }
        accepted
      }
    }
  }
`