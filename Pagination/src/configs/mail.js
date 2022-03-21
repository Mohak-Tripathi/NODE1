const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
	port: 587,
	secure: false, // true for 465, false for other ports
	auth: {
		user: "0cf0ddba6d0cdc", // generated ethereal user
		pass: "e5655bd53acd36", // generated ethereal password
	},
})

module.exports= transporter;