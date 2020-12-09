var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    { 
        email: String,
        password: String,
        fullname: String
    }
);

var Accounts = mongoose.model('Accounts', schema, 'account');

module.exports = Accounts;