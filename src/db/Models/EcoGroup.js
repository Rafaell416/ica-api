'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema


const EcoGroup = new Schema({
  name: {type: String, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true},
})

module.exports = Mongoose.model('EcoGroup', EcoGroup)
