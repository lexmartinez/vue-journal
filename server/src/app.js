'use strict'
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const _ = require('lodash')
const Entry = require('./models/entry')
const prefix = '/entries'
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get(prefix, (req, res) => {
  Entry.find({}, (err, entries) => {
    if (err) {
      res.statusCode(500).send(err)
    }
    res.send(_.orderBy(entries, ['date'], ['asc']))
  })
})

app.post(prefix, (req, res) => {
  const entry = new Entry({
    date: new Date(),
    description: req.body.description,
    progress: req.body.progress,
    project: req.body.project,
    repoName: req.body.repoName,
    repoUrl: req.body.repoUrl
  })

  entry.save((error) => {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Entry saved successfully!'
    })
  })
})

app.get(prefix + '/:id', (req, res) => {
  Entry.findById(req.params.id, 'date progress description project repoName repoUrl', (error, entry) => {
    if (error) { console.error(error) }
    res.send(entry)
  })
})

app.put(prefix + '/:id', (req, res) => {
  Entry.findById(req.params.id, 'date progress description project repoName repoUrl', (error, entry) => {
    if (error) { console.error(error) }
    entry.description = req.body.description
    entry.progress = req.body.progress
    entry.project = req.body.project
    entry.repoName = req.body.repoName
    entry.repoUrl = req.body.repoUrl
    entry.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

app.listen(process.env.PORT || 8081)
