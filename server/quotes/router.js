let express = require('express')

let controller = require('./controller')

let router = new express.Router()

router.post('/', controller.create)
router.get('/', controller.getAll)
//router.get('/tag/:tag', controller.getByTag)
router.get('/:id', controller.getById)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router
