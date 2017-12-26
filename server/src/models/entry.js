'use strict'

const mongoose = require('../db')
const Schema = mongoose.Schema

const EntrySchema = new Schema({
  date: Date,
  content: String
})

const Entry = mongoose.model('Entry', EntrySchema)
module.exports = Entry
