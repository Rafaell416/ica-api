const Fine = `
  type Fine {
    type: String!
    date: String!
    description: String!
    studentId: String!
    payWay: String!
  }

  input newFine {
    type: String!
    date: String!
    description: String!
    studentId: String!
  }
`

module.exports = Fine
