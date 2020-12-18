var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    { 
        idUser: String,
        fullname: String,
        address: String,
        phone: String,
        total: Number,
        cart: Array,
        status: Boolean
    }
);

var History = mongoose.model('History', schema, 'history');

module.exports = History;