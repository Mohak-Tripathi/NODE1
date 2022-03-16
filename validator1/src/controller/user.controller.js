const express= require("express")


const { body, validationResult } = require("express-validator");
const User = require("../models/user.models")

const router = express.Router()



router.post("",

body("first_name").not().isEmpty().withMessage("first name is required and should not be empty"),
body("last_name").not().isEmpty().withMessage("Last Name should not be empty!!"),
body("email").isEmail().withMessage('Please enter valid email address'),
body("pincode").not().isEmpty().withMessage("pincode should not be empty").isLength({min:6, max:6}).withMessage("Pincode should consist of 6 digits"),
body("age").not().isEmpty().withMessage("age should not be empty").isInt({min:1, max:100}).withMessage('Age should between 1 to 100'),
body("gender").custom( (value)=>{

    if(value=="Male" || value=="Female" || value=="Others"){ 
        return true;
    }
    throw new Error("Please enter the valid gender");

}),



async (req, res) => {
    try{

        console.log(body("first_name"))


        const errors = validationResult(req);
      console.log({ errors });
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });

      }


const user= await User.create(req.body);

return res.status(201).send({user: user}) 
    }

    catch(error){
        return res.status(500).send({ message: error });
    }
})

module.exports= router;