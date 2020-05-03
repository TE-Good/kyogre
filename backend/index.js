/**
 * IDEAS
 * Could send a text at 8am every morning with my tenet and quote of the day
 * Use this as the API for a webapp that will give me a quote for each day
 * Could also make a short mobile app with this
 * START PAGE IS A PIN 4 by 4. Need to type in the right code
 */


const express = require('express')
const moment = require('moment')
require('dotenv').config()

const quotes = require('./quotes')

const port = '8000'

const app = express()

// app.use(express.json())

app.use((req, res, next) => {
  console.log(`${req.method} to ${req.url}`)
  next()
})

// app.get('/api/tenet', (req, res) => res.send({ 'tenet': process.env.TENET }))
app.get('/api/quote', (req, res) => res.send(quotes.quotes[moment().format('DDD') % quotes.quotes.length]))
app.get('/api/random_quote', (req, res) => res.send(quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)]))
app.listen(port, () => console.log(`Receiving on port ${port}`))