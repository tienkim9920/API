
const mailer = require('../../mailer')

const Carts = require('../../models/carts.model')

module.exports.sendmail = async (req, res) => {

    try {

        // Lấy data truyền lên từ form phía client
        const to = req.query.to
        const fullname = req.query.fullname
        const phone = req.query.phone
        const address = req.query.address
        const idUser = req.query.idUser
        const subject = 'Hóa Đơn Đặt Hàng'

        const cartsUser = await Carts.find({idUser: idUser})

        let total = 0

        let sum = cartsUser.map(value => {
            return total += parseInt(value.price) * parseInt(value.count)
        })

        const htmlHead = '<table style="width:50%">' + 
        '<tr style="border: 1px solid black;"><th style="border: 1px solid black;">Tên Sản Phẩm</th><th style="border: 1px solid black;">Hình Ảnh</th><th style="border: 1px solid black;">Giá</th><th style="border: 1px solid black;">Số Lượng</th><th style="border: 1px solid black;">Thành Tiền</th>'

        let htmlContent = ""

        for (let i = 0; i < cartsUser.length; i++){
            htmlContent += '<tr>' +
                        '<td style="border: 1px solid black; font-size: 1.2rem; text-align: center;">' + cartsUser[i].name + '</td>' +
                        '<td style="border: 1px solid black; font-size: 1.2rem; text-align: center;"><img src="' + cartsUser[i].image + '" width="80" height="80"></td>' +
                        '<td style="border: 1px solid black; font-size: 1.2rem; text-align: center;">' + cartsUser[i].price + '$</td>' +
                        '<td style="border: 1px solid black; font-size: 1.2rem; text-align: center;">' + cartsUser[i].count + '</td>' +
                        '<td style="border: 1px solid black; font-size: 1.2rem; text-align: center;">' + ( parseInt(cartsUser[i].price) * parseInt(cartsUser[i].count) ) + '$</td><tr>'
        }

        const htmlResult = '<h1>Xin Chào ' + fullname + '</h1>' + '<h3>Phone: ' + phone + '</h3>' + '<h3>Address:' + address + '</h3>' +
                            htmlHead + htmlContent + '<h1>Tổng Thanh Toán: ' + total + '$</br>' + '<p>Cảm ơn bạn!</p>'

        // Thực hiện gửi email (to, subject, htmlContent)
        await mailer.sendMail(to, subject, htmlResult)

        // Quá trình gửi email thành công thì gửi về thông báo success cho người dùng
        res.send('<h3>Your email has been sent successfully.</h3>')

    } catch (error) {
        // Nếu có lỗi thì log ra để kiểm tra và cũng gửi về client
        console.log(error)
        res.send(error)
    }

}