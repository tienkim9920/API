
var Carts = require('../../models/carts.model')

module.exports.index = async (req, res) => {

    var idParam = req.params.id

    var carts = await Carts.find({idUser: idParam})

    res.json(carts)

}

module.exports.updateCount = async (req, res) => {

    var count = req.query.count
    console.log(count)

    if (!count){
        res.send("That Bai!")
        return
    }

    var idProduct = req.query.idProduct
    console.log(idProduct)

    if (!idProduct){
        res.send("That Bai!")
        return
    }

    var idUser = req.params.id
    console.log(idUser)

    //Tìm đúng sản phẩm cần sửa của User
    var findUserProduct = await Carts.findOne({idUser: idUser, idProduct: idProduct})

    findUserProduct.count = count

    findUserProduct.save()

    res.send("Thanh Cong!")

    // res.json(findUserProduct)

    //Tìm đúng sản phẩm cần sửa
    // var findProduct = findUser.find(value => {
    //     return value.idProduct === idProduct
    // })

    // res.send("Count: " + count + ", idUser: " + idUser + ", idProduct: " + idProduct)


}