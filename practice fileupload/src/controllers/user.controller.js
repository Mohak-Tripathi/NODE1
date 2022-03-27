

const User = require("../models/user.models");

// const { uploadFiles } = require("../middlewares/uploads");

const upload = require("../middleware/uploadmid")


const express = require("express");

const router= express.Router();


router.post("", upload.single("profilePic"), async (req, res)=>{
    

    try{
console.log(req.body);
res.status(200).send("users");
    }
    catch(error){
        res.send(error);
    }
})


module.exports= router;