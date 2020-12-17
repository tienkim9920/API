
var express = require('express');

var emailAPI = require('../controller/email.controller');

var router = express.Router()

router.post('/', emailAPI.sendmail)

module.exports = router