const express= require("express")

const app= express()

app.use(logger)

app.get("/books", (req,res)=>{
    console.log("books");
 return res.send({ route: "/books"})
})

app.use(checkPermission)



app.get("/libraries", (req,res)=>{
    res.send({ route: "/libraries", permission: req.permission, checkpermission: req.checkpermission})
})


app.get("/authors", (req,res)=>{
    res.send({ route: "/authors", permission: req.permission, checkpermission: req.checkpermission})
})


function checkPermission(req, res, next){
    if(req.path==="/libraries"){
        req.permission= true
        req.checkpermission= "librarian"
    }
    else if(req.path==="/authors"){
        req.permission= true
        req.checkpermission= "author"
    }
    console.log("rocksolid1234")
    next();
    console.log("rocksolid10")
}

function logger(req, res,next){
    if(req.path==="/books"){
        req.role="books"
    }
    else if(req.path==="/libraries"){
        req.role="libraries"
    }
    else{
        req.role="authors"
    }
    console.log("middleare11");
    next();
}

app.listen(3002, ()=>{
    console.log("listening to 3002")
})