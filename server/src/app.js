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
  var content = req.body.content
  var entry = new Entry({
    date: new Date(),
    content
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
  Entry.findById(req.params.id, 'date content', (error, entry) => {
    if (error) { console.error(error) }
    res.send(entry)
  })
})

app.put(prefix + '/:id', (req, res) => {
  Entry.findById(req.params.id, 'date content', (error, entry) => {
    if (error) { console.error(error) }
    entry.content = req.body.content
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
