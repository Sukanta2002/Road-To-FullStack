import express from "express";
import cors from "cors";

// create an app
const app = express();

const port = 3000;


app.use(cors())

app.get("/", (req,res) => {
    res.json({
        "msg": "hii from todo"
    })
})


// create a new get request at the "/goodmr" route and sent the json responce as "Hello! Good mr"
// Now from the frontend send the reques to "/goodmr" route and print the responce in the console


// app is starting 
app.listen(port, () => {
    console.log("app is running");
})