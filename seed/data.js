// Import quotes data
let quotes = require('./quotes.json')

// Import Quote model
let Quote = require('../server/quotes/model.js')

Quote.deleteMany({})
  .then(() => {
    Quote.create(quotes)
      .then(() => {
        mongoose.disconnect()
      })
  })