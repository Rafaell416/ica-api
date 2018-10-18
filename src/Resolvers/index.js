'use strict'

const lib = require('../lib')

const resolvers = {
  Query: {
    currentUser: (_, args, context) => context.user,
  },
  Mutation: {
    login: (_, args) => lib.login( args.username, args.password ),
    signup: (_, args) => lib.signup( args.user ),

    createStudent: (_, args) => lib.createStudent( args.student ),
    getStudentByFullName: (_, args) => lib.getStudentByFullName( args.name ),
    getStudentFines: (_, args) => lib.getStudentFines( args.studentId ),

    createFine: (_, args) => lib.createFine( args.studentId, args.fine ),
    deleteFine: (_, args) => lib.deleteFine( args.fineId ),
    addPayWay: (_, args) => lib.addPayWay( args.fineId, args.payWay ),
  }
}

module.exports = resolvers
