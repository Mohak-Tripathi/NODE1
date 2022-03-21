
const express= require("express");

const { body, validationResult } = require('express-validator');

const Publication= require("../models/publication.model")
const router= express.Router();

router.post("",
body("name").not().isEmpty().withMessage("name is required"),


async(req, res)=>{
    try{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
const publication= await Publication.create(req.body)
return res.status(200).send(books)
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})

module.exports= router;