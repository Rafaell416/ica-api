const User = `
  type User {
    _id: ID!
    id: String
    username: String!
    name: String
    jwt: String
    role: String!
  }

  input newUser {
    username: String!
    name: String!
    password: String!
    role: String!
    id: String
  }
`

module.exports = User
