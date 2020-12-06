var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    { 
        name: String,
        image: String,
        price: Number,
        status: Boolean,
        category: String
    }
);

var Clothes = mongoose.model('Clothes', schema, 'clothes');

module.exports = Clothes;