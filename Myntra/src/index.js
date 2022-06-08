const express= require('express')


const frazoProductController= require("./controller/frazo.controller")
const app = express()

app.use(express.json()) // express can't read json body. So we need to provide middleware "json"

app.use("/products", frazoProductController)
module.exports = app; 
