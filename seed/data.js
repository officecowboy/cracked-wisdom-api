let database = require('../database')

// Import quotes data
let quotes = require('./quotes.json')

// Import Quote model
let Quote = require('../server/quotes/model')

Quote.deleteMany({})
  .then(() => {
    Quote.create(quotes)
      .then(() => {
        database.disconnect()
      })
  })