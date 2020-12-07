var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    { 
        idUser: String,
        idProduct: String,
        name: String,
        image: String,
        price: Number,
        count: Number
    }
);

var Carts = mongoose.model('Carts', schema, 'carts');

module.exports = Carts;