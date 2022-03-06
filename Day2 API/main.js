const express= require("express")
const app = express();

app.listen(3004, ()=>{

    console.log("listening on post 3004")
});

app.get("", function(req, res){

    res.send("hello")
});

app.get("/books", function(req,res){
   return res.status(200).json({
       result: [
       {
           "name": "Zero to one",
           "author": "Peter theil",
       },
       {
           "name": "Magic of thinking Big",
           "author": "Mohak Tripathi",
       },
       {
           "name": "Hooked",
           "author": "Nir Eyal",
       },
       {
           "name": "Tap Dance",
           "author": "Warren Buffet",
       },

   ],
})

})




