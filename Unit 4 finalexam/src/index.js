const express = require("express");
const app = express();

app.use(express.json());

const userController = require("./models/user.models")

const todosController= require("./models/todo.models.js")

const {register, login}= require("./controller/auth.controller")

app.use("/users", userController);

app.use("/todos", todosController);

app.post("/register", register);

app.post("/login", login)








module.exports = app;