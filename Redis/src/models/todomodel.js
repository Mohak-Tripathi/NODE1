const mongoose = require("mongoose");



const todoSchema= new mongoose.Schema({

name: { type: String, required: true },
time: { type: Number, required: false},
isComplete: { type: String, required: false}

},{
    versionKey: false,
    timestamps: true,
})

module.exports= mongoose.model("todo", todoSchema)

