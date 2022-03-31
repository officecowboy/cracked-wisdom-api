let express = require('express')
let quotesRouter = require('./quotes/router')

let router = new express.Router()

router.use('/quotes', quotesRouter)

module.exports = router