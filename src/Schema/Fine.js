const Fine = `
  type Fine {
    _id: String!
    type: String!
    date: String!
    description: String!
    studentId: String!
    payWay: String
  }

  input newFine {
    type: String!
    date: String!
    description: String!
  }
`

module.exports = Fine
