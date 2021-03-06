'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const { ApolloServer } = require('apollo-server-express')
const User = require('./User')
const Student = require('./Student')
const Fine = require('./Fine')
const resolvers = require('../Resolvers')

const rootQuery =`
  type Query {
    currentUser : User
  }

  type Mutation {
    signup (user: newUser!) : User
    login (username: String!, password: String!) : User
    createStudent (student: newStudent!) : Student
    getStudentByFullName (name: String!) : Student
    createFine (studentId: String!, fine: newFine!) : Fine
    deleteFine (fineId: String!) : Fine
    addPayWay (fineId: String!, payWay: String!) : Fine
    getStudentFines (studentId: String!) : [Fine]
  }
`

const schema = makeExecutableSchema({
  typeDefs: [rootQuery, User, Fine, Student],
  resolvers
})

module.exports = schema
