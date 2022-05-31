const mongoose = require("mongoose")
const userSchema=new mongoose.Schema({
 firstName:{type:String,required:true},
 lastName:{type:String,required:true},
 age:{type:Number,required:true},
 DateOfBirth:{type:String,required:true}

})

const user= mongoose.model("user",userSchema)

module.exports=user