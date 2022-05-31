const mongoose = require("mongoose");
const connect = () =>{
    mongoose.connect("mongodb+srv://keshav:keshav@cluster0.ryt59.mongodb.net/apiRateLimit")
}

module.exports = connect;