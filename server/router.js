let express = require('express')
let quotesRouter = require('./quotes/router')
let phonesRouter = require('./phones/router')

let router = new express.Router()

router.get("/", (req, res) => res.send("Welcome to Cracked Wisdom!"));

router.use('/', quotesRouter)
router.use('/', phonesRouter)

module.exports = router