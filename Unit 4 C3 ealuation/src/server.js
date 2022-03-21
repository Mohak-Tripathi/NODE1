const express= require('express');



const connect= require("./config/db")
const app = express();

app.listen(4500, async()=>{
try{
    await connect();
    console.log("listening on port 4500");
}
catch(error){
    console.log(error);
}
})