'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema


const Student = new Schema({
  name: {type: String, required: true},
  id: {type: String, required: true},
  course: {type: String, required: true},
})

module.exports = Mongoose.model('Student', Student)
