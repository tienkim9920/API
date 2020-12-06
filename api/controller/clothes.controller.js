
var Clothes = require('../../models/clothes.model')

module.exports.index = async (req, res) => {

    var allProduct = await Clothes.find()

    res.json(allProduct)

}

module.exports.category = async (req, res) => {

    var keyword = req.query.category

    var categoryProduct = await Clothes.find({ category: keyword})

    var start = 0
    var end = 6

    var productSlice = categoryProduct.splice(start, end)

    res.json(productSlice)

}

module.exports.detail = async (req, res) => {

    var params = req.params.id 

    var findProduct = await Clothes.findOne({_id: params})

    res.json(findProduct)

}