
var History = require('../../models/history.model')

module.exports.index = async (req, res) => {

    const idUser = req.params.id

    var history = await History.find({idUser: idUser})

    res.json(history)
}