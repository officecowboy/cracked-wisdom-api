let database = require('../database')

// Import quotes data
let quotes = require('./quotes.json')

// Import Quote model
let Quote = require('../server/quotes/model')

// Import phones data
let phones = require('./phones.json')

// Import Phone model
let Phone = require('../server/phones/model')

Quote.deleteMany({})
Phone.deleteMany({})
  .then(() => {
    Quote.create(quotes)
    Phone.create(phones)
      .then(() => {
        database.disconnect()
      })
  })