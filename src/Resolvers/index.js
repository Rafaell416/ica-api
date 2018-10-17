'use strict'

const lib = require('../lib')

const resolvers = {
  Query: {
    currentUser: (_, args, context) => context.user
  },
  Mutation: {
    login: (_, args) => lib.signup(args),
    signup: (_, args) => lib.signup(args.user),
  }
}

module.exports = resolvers
