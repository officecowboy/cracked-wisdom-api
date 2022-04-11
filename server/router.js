let express = require('express')
let quotesRouter = require('./quotes/router')

let router = new express.Router()

router.get("/", (req, res) => res.send("This is the API root!"));

router.use('/', quotesRouter)

module.exports = router