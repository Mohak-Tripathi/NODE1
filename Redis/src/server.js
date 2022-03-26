const app = require("./index");

const connectDB= require("./configs/db")

app.listen(5100, async () => {
try{

    await connectDB()
    console.log("listening to 5100")
}
catch(err){
    console.log(err)
}

})