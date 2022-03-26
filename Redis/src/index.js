const express= require('express')

const app = express();

app.use(express.json())
const todoController = require("./controller/todocontroller")

app.use("/todos", todoController)


module.exports= app;