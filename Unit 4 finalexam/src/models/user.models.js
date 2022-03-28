const mongoose = require("mongoose");

const bcrypt= require("bcrypt");

const UserSchema= mongoose.Schema({

    firstName: { type: String, required: true},
    lastName: { type: String, required: false},
    email: { type: String, required: true},
    password: { type: String, required: true }
   
},
{
    versionKey: false,
    timestamps: true,
})

UserSchema.pre("save", function(next){
    const hash= bcrypt.hashSync(this.password, 7);
    this.password= hash;
    return next()
})

UserSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password)
}
module.exports= mongoose.model("user", UserSchema)