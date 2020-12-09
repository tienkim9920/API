
var Carts = require('../../models/carts.model')
var Clothes = require('../../models/clothes.model')

module.exports.index = async (req, res) => {

    var idParam = req.params.id

    var carts = await Carts.find({idUser: idParam})

    res.json(carts)

}

module.exports.updateCount = async (req, res) => {

    //Lấy count cần update
    var count = req.query.count

    //Lấy idProduct của sản phẩm cần update
    var idProduct = req.query.idProduct

    //Lấy idUser của user cần update
    var idUser = req.params.id

    //Tìm đúng sản phẩm cần update của User
    var findUserProduct = await Carts.findOne({idUser: idUser, idProduct: idProduct})

    findUserProduct.count = count

    findUserProduct.save()

    res.send("Thanh Cong!")

}

module.exports.addCarts = async (req, res) => {

    //Lấy idProduct của sản phẩm cần mua
    var idProduct = req.params.id

    var product = await Clothes.findOne({_id: idProduct})

    //Lấy idUser của user cần mua
    var idUser = req.query.idUser

    //Lấy count cần mua
    var count = req.query.count

    //Tìm đúng cái sản phẩm mà User đã thêm vào giỏ hàng
    var cart = await Carts.findOne({idUser: idUser, idProduct: idProduct})

    //Kiểm tra xem User đã từng thêm sản phẩm này chưa
    //Nếu không tìm thấy thì == null và insert vào
    //Nếu tìm thấy thì sẽ update số lượng
    if (!cart){

        const dataInsert = {
            idUser: idUser,
            idProduct: idProduct,
            name: product.name,
            image: product.image,
            price: product.price,
            count: count
        }

        Carts.insertMany(dataInsert)

        res.send("Thanh Cong!")

    }else{     

        cart.count += parseInt(count)

        cart.save()

        res.send("Thanh Cong!")

    }

}

module.exports.deleteCarts = async (req, res) => {

    //Lấy idUser của user cần mua
    var idUser = req.params.id

    //Lấy idProduct của sản phẩm cần mua
    var idProduct = req.query.idProduct
    
    //Tìm đúng cái sản phẩm mà User đã thêm vào giỏ hàng
    var cart = await Carts.findOne({idUser: idUser, idProduct: idProduct})

    cart.delete()

    res.send("Thanh Cong!")
    
}