'use strict'

const mongoose = require('../db')
const Schema = mongoose.Schema

const EntrySchema = new Schema({
  date: Date,
  progress: String,
  description: String,
  project: String,
  repoName: String,
  repoUrl: String
})

const Entry = mongoose.model('Entry', EntrySchema)
module.exports = Entry
