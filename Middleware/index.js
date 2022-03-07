const express= require("express")

const app = express()


app.use(allbooks);

app.get("/books", (req,res)=>{
    res.send("hello")
})


function allbooks(req, res, next){
    console.log("Fetching all books");
    next();
}



app.listen(3004, ()=>{
    console.log("listening at port 3004") 
})