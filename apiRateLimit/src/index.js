const express =require("express")
const rateLimit =require('express-rate-limit')
const userController=require("./controllers/userController")
const app=express();



const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 10 minutes
	max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})


app.use(limiter)
app.use(express.json())
app.use("/user",userController)



module.exports=app