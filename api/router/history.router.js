
var express = require('express');

var historyAPI = require('../controller/history.controller');

var router = express.Router()

router.get('/:id', historyAPI.index)

module.exports = router