let mongoose = require('mongoose')
let schema = require('./schema')

let model = mongoose.model('Phones', schema)

module.exports = model