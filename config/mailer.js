const nodemailer = require('nodemailer')
const pass = require('../config/pass')
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    tls: {
        rejectUnauthorized: false
    },
    auth: {
        user: pass.email,
        pass: pass.pass
    }
})


exports.sendMailRequestACall = async(data, files) => {
    const mail = {
        from: data.email,
        to: '<rodgersj097@gmail.com>',
        subject: `${data.fullName} has sent you a message`,
        text: `
                Full name: ${data.fullName},
                Email: ${data.email},
                message: ${data.content}
        `
    }

    let info = await transporter.sendMail(mail, function(error, response) {
        if (error) {
            console.log(error)
        } else {
            console.log("Message sent: " + response.message)
        }

    })


}