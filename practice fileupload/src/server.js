const express= require('express');



const connect= require("./config/db")
const app = express();

app.listen(4000, async()=>{
try{
    await connect();
    console.log("listening on port 4000");
}
catch(error){
    console.log(error);
}
})