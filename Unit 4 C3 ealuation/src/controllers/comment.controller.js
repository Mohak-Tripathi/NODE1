
const express= require("express");

const { body, validationResult } = require('express-validator');

const Comment= require("../models/comment.model")
const router= express.Router();





router.get("",async(req, res)=>{
    try{

        const page= req.body.page || 1;
        const pagesize= req.body.pagesize || 10;

        const skip= (page-1) * pagesize;

const products= await Comment.find().skip(skip).limit(pagesize).lean().exec();


return res.status(200).send(books)
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})

router.post("",
body("body").not().isEmpty().withMessage("comment is required"),


async(req, res)=>{
    try{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
const comment= await Comment.create(req.body)
return res.status(200).send(books)
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})

module.exports= router;