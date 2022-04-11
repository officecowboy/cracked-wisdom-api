let express = require('express')

let controller = require('./controller')

let router = new express.Router()

router.post('/quotes', controller.create)
router.get('/quotes', controller.getAll)
router.get('/quotes/random', controller.getRandom)
router.get('/quotes/random-ten', controller.getRandomTen)
router.get('/quotes/:id', controller.getById)
router.put('/quotes/:id', controller.update)
router.delete('/quotes/:id', controller.delete)

module.exports = router
