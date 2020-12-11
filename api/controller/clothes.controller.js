
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

module.exports.pagination = async (req, res) => {

    var page = parseInt(req.query.page) || 1

    var numberProduct = parseInt(req.query.count) || 1

    var keyWordSearch = req.query.search

    var start = (page - 1) * numberProduct
    var end = page * numberProduct

    var clothes = await Clothes.find()
    
    var paginationProducts = clothes.slice(start, end)


    if (!keyWordSearch){
        
        res.json(paginationProducts)

    }else{
        var newData = paginationProducts.filter(value => {
            return value.name.toUpperCase().indexOf(keyWordSearch.toUpperCase()) !== -1
        })
    
        res.json(newData)
    }

}