let express = require('express')
let equipmentRouter = require('./quotes/router')

let router = new express.Router()

router.use('/quotes', equipmentRouter)

module.exports = router