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
        addProject()
    }
`
