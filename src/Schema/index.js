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
    signup (user: newUser) : User
    login (username: String!, password: String!) : User
  }
`

const schema = makeExecutableSchema({
  typeDefs: [rootQuery, User, Fine, Student],
  resolvers
})

module.exports = schema
