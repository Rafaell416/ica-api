'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema


const Directive = new Schema({
  name: {type: String, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true},
})

module.exports = Mongoose.model('Directive', Directive)
