'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema


const User = new Schema({
  name: {type: String, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true},
  role: {type: String, required: true}
})

module.exports = Mongoose.model('User', User)
