const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.get("", async (req, res) => {
	try {
		const page = req.query.page || 1;
		const pagesize = req.query.pagesize || 2;

		const skip = (page - 1) * pagesize;

		const users = await User.find().skip(skip).limit(pagesize).lean().exec();
		// const users = await User.find().lean().exec();

		const totalPages = Math.ceil(
			(await User.find().countDocuments()) / pagesize
		);

		return res.status(200).send({ users, totalPages });
	} catch (err) {
		return res.status(500).send(err);
	}
});

const transporter = require("../configs/mail");
const path = require("path");

router.post("", async (req, res) => {
	try {
		const user = await User.create(req.body);

		if (req.body.type == "User") {
			transporter.sendMail({
				from: "amazon Admin <admin@masai.com>", // sender address
				to: user.email, 
				subject: "welcome to Amazon " + user.first_name + user.last_name,
				text:
					"Hi" + " " + user.first_name + ", Please confirm your email address", // plain text body
				// html: "<b>Hello world?</b>", // html body
			});
			
			transporter.sendMail({
				from: "Amazon Admin <admin@masai.com>", // sender address
				to: [
					"admin1@gmail.com",
					"admin2@gmail.com",
					"admin3@gmail.com",
					"admin4@gmail.com",
					"admin5@gmail.com",
				], 
				subject:
					user.first_name + " " + user.last_name + " has registered with us.", // Subject line
				text: "Please welcome " + user.first_name + " " + user.last_name, // plain text body
				// html: "<b>Hello world?</b>", // html body
			});
		}

		return res.status(201).send({ user: "Registered Successfully" });
	} catch (err) {
		return res.status(500).send(err);
	}
});

module.exports = router;



