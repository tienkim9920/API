const express = require('express')
const app = express()
var cookieParser = require('cookie-parser');
const cors = require('cors');
const port = 3000

const productsAPI = require('./api/router/products.router')
const clotheAPI = require('./api/router/clothes.router')
const cartAPI = require('./api/router/carts.router')
const accountAPI = require('./api/router/accounts.router')
const emailAPI = require('./api/router/email.router')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Shopping', { useFindAndModify: false, useCreateIndex: false });

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Cài Đặt Cors và thêm này vào
app.use(cors())
app.use(cookieParser());

app.use('/products', productsAPI)

app.use('/clothes', clotheAPI)

app.use('/carts', cartAPI)

app.use('/accounts', accountAPI)

app.use('/email', emailAPI)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})