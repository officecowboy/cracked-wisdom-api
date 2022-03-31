let mongoose = require('mongoose')

let schema = new mongoose.Schema({
  quote: String,
  author: String,
  tag: String
})

module.exports = schema
