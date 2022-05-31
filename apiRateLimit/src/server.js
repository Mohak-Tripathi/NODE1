const connect = require("./configs/db");

const app =require("./index")

const port = process.env.PORT||5000;



app.listen(port,async ()=>{
    try {
        await connect()
    } catch (err) {
       console.log(err.message); 
    }
    console.log(`listening to port ${port}`);
})