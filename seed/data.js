let database = require('../database')

// Import quotes data
let quotes = require('./quotes.json')

// Import Quote model
let Quote = require('../server/quotes/model')

// Import phones data
let phones = require('./phones.json')

// Import Phone model
let Phone = require('../server/phones/model')

const seedDB = async () => {
  await Quote.deleteMany({});
  await Quote.create(quotes);
  await Phone.deleteMany({});
  await Phone.create(phones);
}

seedDB().then(() => {
  database.disconnect();
})
