const User = `
  type User {
    _id: ID
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
  }
`

module.exports = User
