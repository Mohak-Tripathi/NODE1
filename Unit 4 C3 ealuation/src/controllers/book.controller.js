
const express= require("express");

const { body, validationResult } = require('express-validator');

const Books= require("../models/book.model")
const router= express.Router();

router.post("",
body("coverImage").not().isEmpty().withMessage("coverImage is required"),
body("content").not().isEmpty().withMessage("content is required"),

async(req, res)=>{
    try{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
const books= await Books.create(req.body)
return res.status(200).send(books)
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})

module.exports= router;