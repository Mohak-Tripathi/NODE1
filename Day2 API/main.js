const express= require("express")
const app = express();

app.listen(3004, ()=>{

    console.log("listening on post 3004")
});

app.get("", function(req, res){

    res.send("hello")
});

app.get("/books", function(re,res){
res.send({
    "Atomic habit": "self-help",
    "zero to one": "startup",
    "hooked": "habit formation",
    "Everything store": "amazon story"

})
});