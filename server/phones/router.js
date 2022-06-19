let express = require('express')

let controller = require('./controller')

let router = new express.Router()

router.get('/phones', controller.getAll)
router.get('/phones/random', controller.getRandom)
router.get('/phones/random-ten', controller.getRandomTen)
router.get('/phones/:id', controller.getById)

module.exports = router
