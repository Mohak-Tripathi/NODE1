const express= require('express');

const app = express();
app.use(express.json());

const usercontroller= require("./controllers/user.controller")

app.use("/usersss", usercontroller)

module.exports= app;




