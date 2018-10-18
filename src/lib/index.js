'use strict'

const User = require('../db/Models/User')
const Fine = require('../db/Models/Fine')
const Student = require('../db/Models/Student')
const bcrypt = require('bcrypt')
const config = require('../../config')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || config.JWT_SECRET


function _handleError ( error ) {
    throw new Error(error)
    return []
  }

async function signup ( user ) {
  try {
    const { username, name, password, role } = user
    const existingUser = await User.findOne({ username })
    if ( existingUser ) return _handleError('This username already exist')

    const hash = await bcrypt.hash( password, 10 )

    const userToCreate = new User({ username, name, role, password: hash })
    const userCreated = await userToCreate.save()
    userCreated.jwt = jwt.sign({ _id: userCreated._id }, JWT_SECRET)
    return userCreated

  } catch (e) {
    _handleError(`There was an error creating user: ==> ${e}`)
  }
}

async function login ( username, password ) {
  try {
    const user = await User.findOne({ username })
    if ( !user ) return _handleError('user not found')

    const validPassword = await bcrypt.compare(password, user.password)
    if ( !validPassword ) return _handleError('password incorrect')

    user.jwt = jwt.sign({ _id: user._id }, JWT_SECRET)
    return user
  } catch (e) {
    _handleError(`There was an error signin in: ===> ${e}`)
  }
}

async function getStudentByFullName ( fullName ) {
  try {
    const capitalizedName = fullName.replace(/(^| +)(.)/g, (_, spaces, characters) => spaces+characters.toUpperCase())
    const user = await Student.find({name: { $regex: '.*' + capitalizedName + '.*' } })
    if ( !user ) return _handleError('student not found')
    return user[0]
  } catch (e) {
      _handleError(`There was an error retreiving user by full name: ==> ${e}`)
  }
}

async function createStudent ( student ) {
  try {
    const { name, id, course } = student
    const capitalizedName = name.replace(/(^| +)(.)/g, (_, spaces, characters) => spaces+characters.toUpperCase())
    const studentToCreate = new Student({ name, id, course })
    const studentCreated = await studentToCreate.save()
    return studentCreated
  } catch (e) {
      _handleError(`There was an error creating student: ==> ${e}`)
  }
}

async function getStudentFines ( studentId ) {
  try {
    const fines = await Fine.find({ studentId })
    return fines
  } catch (e) {
      _handleError(`There was an error getting student fines: ==> ${e}`)
  }
}

async function createFine ( studentId, fine ) {
  try {
  const fineObject = Object.assign({}, fine, { studentId, payWay: '' })
  const fineToCreate = new Fine(fineObject)
  const fineCreated = await fineToCreate.save()
  return fineCreated
  } catch (e) {
      _handleError(`There was an error creating the fine: ==> ${e}`)
  }
}

async function deleteFine ( fineId ) {
  try {
    const fineToRemove = await Fine.findOne({ _id: fineId })
    const fineRemoved = await Fine.remove({ _id: fineId })
    return fineToRemove
  } catch (e) {
    _handleError(`There was an error deleting the fine: ==> ${e}`)
  }
}

async function addPayWay ( fineId, payWay ) {
  try {
     await Fine.findOneAndUpdate({ _id: fineId }, { payWay }, { upsert: true })
     const fineUpdated = await Fine.findOne({ _id: fineId })
     return fineUpdated
  } catch (e) {
    _handleError(`There was an error updating the fine: ===> ${e}`)
  }
}

module.exports = {
  signup,
  login,
  createStudent,
  getStudentByFullName,
  getStudentFines,
  createFine,
  deleteFine,
  addPayWay,
}
