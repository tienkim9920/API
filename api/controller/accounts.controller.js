
var Accounts = require('../../models/accounts.model')

module.exports.index = async (req, res) => {

    var accounts = await Accounts.find()

    res.json(accounts)

}

module.exports.signup = async (req, res) => {

    var fullname = req.query.fullname

    var email = req.query.email

    var password = req.query.password

    var account = {
        fullname: fullname,
        email: email,
        password: password
    }

    Accounts.insertMany(account)

    res.send("Thanh Cong!")
    
    // res.send("FullName: " + fullname + " , Email: " + email + " , Pass: " + password)

}