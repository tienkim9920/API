
var Products = require('../../models/products.models')

module.exports.index = async (req, res) => {
    
    var products = await Products.find()

    res.json(products)
}

// module.exports.pagination = async (req, res) => {

//     var page = parseInt(req.query.page) || 1

//     var numberProduct = parseInt(req.query.count) || 1

//     var start = (page - 1) * numberProduct
//     var end = page * numberProduct
    
//     var products = await Products.find()

//     var paginationProducts = products.slice(start, end)

//     res.json(paginationProducts)

// }

//Pagination Phát Triển Thêm Chức năng Search
module.exports.search = async (req, res) => {

    var page = parseInt(req.query.page) || 1

    var numberProduct = parseInt(req.query.count) || 1

    var keyWordSearch = req.query.search

    var start = (page - 1) * numberProduct
    var end = page * numberProduct

    var products = await Products.find()
    
    var paginationProducts = products.slice(start, end)


    if (!keyWordSearch){
        
        res.json(paginationProducts)

    }else{
        var newData = paginationProducts.filter(value => {
            return value.nameProduct.toUpperCase().indexOf(keyWordSearch.toUpperCase()) !== -1
        })
    
        res.json(newData)
    }

}