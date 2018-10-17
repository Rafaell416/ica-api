'use strict'

const lib = require('../lib')

const resolvers = {
  Query: {
    currentUser: (_, args, context) => context.user,
    getUserByFullName: (_, args) => lib.getUserByFullName( args.name )
  },
  Mutation: {
    login: (_, args) => lib.login( args.username, args.password ),
    signup: (_, args) => lib.signup( args.user ),
    createFine: (_, args) => lib.createFine( args.studentId, args.fine ),
    deleteFine: (_, args) => lib.deleteFine( args.fineId ),
    addPayWay: (_, args) => lib.addPayWay( args.fineId, args.payWay )
  }
}

module.exports = resolvers
