const express = require("express");

const mongoose = require("mongoose")

const app = express();

const connectDB = () => {
    return mongoose.connect(" mongodb://127.0.0.1:27017/weeb15coding")
}


//User SchemaTypes

const userSchema = new mongoose.Schema(
    {
        "firstName":{ type: String, required: true },
        "lastName": { type: String, required: true },
        "age": { type: Number, required: true },
        "email": { type: String, required: true },
        "address": { type: String, required: true },
        "type": { type: String, default: "Customer" },



    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const User = mongoose.model("user", userSchema)



const BranchDetailSchema = new mongoose.Schema({

    "name": {type: String, required: true},
   "address": {type: String, required: true},
   "IFSC" : {type: String, required: true}, 
   "MICR": { type: String, required: true},
   "savingId": {type: mongoose.Schema.Types.ObjectId, ref: "saving", required: true},
   "fixedId": {type: mongoose.Schema.Types.ObjectId, ref: "fixed", required: true},



}, {
    versionKey: false,
    timestamps: true,
})

const Branch= mongoose.model("branch", BranchDetailSchema)




const MasterAccount= new mongoose.Schema({


    "balance": { type: Number, required: true }, 
    "userId": {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true},
}, {
    versionKey: false,
    timestamps: true,

})

const Master = mongoose.model("master", MasterAccount)


const SavingsAccount= new mongoose.Schema({ 

    "account_number": { type: Number, required: true , unique: true},
    "balance": { type: Number, required: true },
    "interestRate": {type: Number, required: true},
    "savingId": {type: mongoose.Schema.Types.ObjectId, ref: "saving", required: true},
    "masterId": { type: mongoose.Schema.Types.ObjectId, required: "masterId", required: true},
    "userId": {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true}
}, {
    versionKey: false,
    timestamps: true,
})





const Saving= mongoose.model("saving", SavingsAccount )


const FixedAccount= new mongoose.Schema({
    "account_number": {type: Number, required: true , unique: true},
    "balance": {type: Number, required: true},
    "interestRate": { type: Number, required: true},
    "startDate": {type: Date, required: true},
    "maturityDate": { type: Date, required: true},
    "masterId": { type: mongoose.Schema.Types.ObjectId, required: "masterId", required: true},

}, {
    versionKey: false,
    timestamps: true,
})

const Fixed= mongoose.model("fixed", FixedAccount )

app.get("/masters", async(req,res) =>{

    try{

const Master = await Master.find().lean().exec()
return res.status(200).send({master: Master})


    }
    catch(error){
return res.status(500).send(error);
    }
})


app.post("/savings", async(req, res)=>{
    try{

        const Saving = await Saving.create(req.body)
        return res.status(200).send({saving: Saving})
        
        
            }
            catch(error){
        return res.status(500).send(error);
            }
    
} )



app.post("/savings", async(req, res)=>{
    try{

        const Fixed = await Fixed.create(req.body)
        return res.status(200).send({Fixed: Fixed})
        
        
            }
            catch(error){
        return res.status(500).send(error);
            }
    
} )

app.listen(5000, async () => {

    try {
        await connectDB();

    }
    catch (error) {
        console.log(error)
    }
    console.log("listening to port 5000")
})