

const express= require("express");

const router = express.Router()

router.post("", async (req, res)=>{

    try{

        await User.create(req.body)
    }
    catch(error){

    }
})


