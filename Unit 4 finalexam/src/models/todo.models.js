const mongoose = require('mongoose')

const todosSchema= mongoose.Schema({

title: { type: String, required: true},
userId: { type: mongoose.Schema.Types.ObjectId, ref: "user"}

},
{ 
    timestamps: true,
    versionKey: false
})

module.exports= mongoose.model("todos", todosSchema)

