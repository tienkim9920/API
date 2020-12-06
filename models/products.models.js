var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    { 
        idUser: String,
        nameProduct: String,
        priceProduct: String,
        imgProduct: String,
        status: Boolean,
        Describe: String
    }
);

var Products = mongoose.model('Products', schema, 'products');

module.exports = Products;