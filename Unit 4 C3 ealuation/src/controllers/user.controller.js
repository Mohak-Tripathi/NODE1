
const express= require("express");

const { body, validationResult } = require('express-validator');

const User= require("../models/user.models")
const router= express.Router();

router.post("",
body("firstName").isLength({min:3, max:30}).withMessage("firstname must be atleast 4 characters"),
body("lastName").isLength({min:3, max:30}).withMessage("lastname must be atleast 4 characters"),
body("email").not().isEmpty().withMessage("valid email id is required").custom(async(value =>{
    const user= await User.findOne({email:value})

    if(user){
        throw new Error("Email is already taken")
    }
    return true;
}),
body("age").not().isEmpty().withMessage("age cannot be empty").isNumeric().custom((value)=>{
if(value<1 || value>130){
    throw new Error("Incorrect age")
}
return true;
}),



async(req, res)=>{
    try{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
const user= await User.create(req.body)
return res.status(200).send(user)
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}))

module.exports= router;
