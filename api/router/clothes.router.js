
var express = require('express')

var router = express.Router()

var clothes = require('../controller/clothes.controller')

router.get('/', clothes.index)

router.get('/category/', clothes.category)

router.get('/detail/:id', clothes.detail)

router.get('/page/', clothes.pagination)

module.exports = router
