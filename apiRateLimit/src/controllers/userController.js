const User= require("../model/userModel")

const express= require("express")

const app=express.Router()
app.get("",async (req,res)=>{
    try {
        const user= await User.find().lean().exec()
        return (res.status(200).send(user))
    } catch (error) {
        return (res.status(500).send(error.message))
    }
})

app.post("",async (req,res)=>{
    try {
        const user= await User.create(req.body)
        return (res.status(200).send(user))
    } catch (error) {
        return (res.status(500).send(error.message))
    }
})

module.exports=app