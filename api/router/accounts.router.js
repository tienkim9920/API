
var express = require('express')

var router = express.Router()

var accounts = require('../controller/accounts.controller')

router.get('/', accounts.index)

router.post('/signup/', accounts.signup)

module.exports = router