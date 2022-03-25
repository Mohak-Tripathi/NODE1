const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");

const Post = require("../models/post.models");

router.post("", authenticate, async (req, res) => {
	req.body.userId = req.user._id;
	try {
		const post = await Post.create(req.body);
		const msg = "A new post created successfully !";
		return res.status(200).send({ msg, post });
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}
});


module.exports= router;