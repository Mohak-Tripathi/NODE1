const express= require('express');

const app = express();
app.use(express.json());

const userController= require(".controllers/user.controller");

const bookController= require(".controllers/book.controller");
const commentController= require(".controllers/comment.controller");
const publicationController= require(".controllers/publication.controller");

app.use("/users", userController);
app.use("/books", bookController);
app.use("/comments", commentController);
app.use("/publications", publicationController);

module.exports= app;




