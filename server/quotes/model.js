let mongoose = require('mongoose')
let schema = require('./schema')

let model = mongoose.model('Quotes', schema)

module.exports = model