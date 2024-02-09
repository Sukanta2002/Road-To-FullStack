import express from "express";
import cors from "cors";

// create an app
const app = express();

const port = 3000;


app.use(cors())
app.use(express.json())

const todos = [];

app.get("/", (req,res) => {
    res.json({
        "msg": "hii from todo"
    })
})


//  Object destructure
// const obj = {
//     name: "sumit",
//     age: "22"
// }

// // const name = obj.name
// // const age = obj.age
// const {name, age} = obj

app.post("/todo", (req,res)=> {
    const {title, description} = req.body;

    if (!title) {
        return res.status(400).json({
            msg: "Nikal Lawde"
        })
    }

    todos.push({
        id: String(Math.floor(Math.random() * (999999 - 100000 + 1) + 100000)
        ) + String( Date.now()),
        title,
        description
    })

    return res.status(200).json({
        msg: "Todo added sucesffuly"
    })
})

// Route for getting all the todos 
app.get("/todo",(req,res) => {
    return res.status(200).json(todos)
})

// Delete route 
app.delete("/todo",(req,res) => {
    const id = req.body.id

    if (!id) {
        return res.status(400).json({
            msg: "Id is empty"
        })
    }

    let index = -1;
    for(let i=0; i< todos.length; i++) {
        if (id == todos[i].id) {
            index = i
        }
    }

    if (index == -1) {
        return res.status(404).json({
            msg: "Todo not found"
        })
    }

    todos.splice(index,1)

    return res.status(200).json({
        msg: "Todo is deleted"
    })
})


// create a new get request at the "/goodmr" route and sent the json responce as "Hello! Good mr"
// Now from the frontend send the reques to "/goodmr" route and print the responce in the console


// app is starting 
app.listen(port, () => {
    console.log("app is running");
})