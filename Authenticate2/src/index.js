const express= require('express');

const app = express();


app.use(express.json());

const userControllers= require("./controllers/user.controllers")
const { register, login} = require("./controllers/auth.controllers");

const postControllers= require("./controllers/post.controllers")

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.use("/users", userControllers);

app.post("/register", register);
app.post("/login", login);

app.use("/posts", postControllers); // for Authenticate => Note app.use and not app.post

module.exports = app;