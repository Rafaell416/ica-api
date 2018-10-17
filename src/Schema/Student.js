const Student = `
  type Student {
    id: String!
    name: String!
    course: String!
    fines: [Fine]
  }

input newStudent {
  id: String!
  name: String!
  course: String!
}
`

module.exports = Student 
