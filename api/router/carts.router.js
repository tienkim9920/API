var express = require('express')

var router = express.Router()

var carts = require('../controller/carts.controller')


router.get('/:id', carts.index)

router.patch('/:id', carts.updateCount)


module.exports = router