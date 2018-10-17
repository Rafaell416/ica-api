'use strict'

const User = require('../db/Models/User')
const bcrypt = require('bcrypt')
const config = require('../../config')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || config.JWT_SECRET


function _handleError (error) {
    throw new Error(error)
  }

async function signup (user) {
  try {
    const { username, name, password, role } = user

    const existingUser = await User.findOne({ username })
    if (existingUser) return _handleError('This username already exist')

    const hash = await bcrypt.hash(password, 10)

    const userToCreate = new User({ username, name, role, password: hash })
    const userCreated = await userToCreate.save()
    userCreated.jwt = jwt.sign({ _id: userCreated._id }, 'ica_s3cr3t')
    return userCreated

  } catch (e) {
    _handleError(`There was an error creating user: ==> ${e}`)
  }
}

module.exports = {
  signup
}
