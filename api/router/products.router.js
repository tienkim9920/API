var express = require('express');

var productsAPI = require('../controller/products.controller');

var router = express.Router()

router.get('/', productsAPI.index)

// router.get('/products/page/', productsAPI.pagination)

router.get('/page/', productsAPI.search)

module.exports = router