

const User= require("../models/user.models")

let jwt = require("jsonwebtoken");


let generatetoken= (user) => {
    return jwt.sign({user}, process.env.SECRET_KEY)
}

const register= async (req,res) => {

    try{
    let user= User.findOne({email : req.body.email})

    if(user){
        return res.status(400).send({message: "Email already exists"})
    }

    user= await User.create(req.body)

    let token = generatetoken(user)

    return res.status(200).send({user,token});
} catch (err) {
    res.status(400).send({message: err.message})
}
}

const login = async(req, res) =>{
    try{

    
    let user= User.findOne({email : req.body.email})

    if(!user){

        return res.status(400).send({message: "Email or Password is wrong"})


    }

    let match= user.CheckPassword(req.body.password)

    if(!match) {
        return res.status(400).send({message: "Email or Password is wrong"})
    }

    let token = generatetoken(user)

    return res.status(200).send({user,token});
} catch (err) {
    res.status(400).send({message: err.message})
}

}

module.exports= {register, login}