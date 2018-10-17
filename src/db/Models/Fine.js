'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema


const Fine = new Schema({
  type: {type: String, required: true},
  date: {type: String, required: true},
  description: {type: String, required: true},
  studentId: {type: String, required: true},
  payWay: { type: String }
})

module.exports = Mongoose.model('Fine', Fine)
