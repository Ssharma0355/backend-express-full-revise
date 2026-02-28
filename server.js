const express = require("express")

const app = express();

const person = [
    {
        name:"Sachin",
        email:"Per@gmail.com",
    },
     {
        name:"Sachin",
        email:"Per@gmail.com",
    },
     {
        name:"Sachin",
        email:"Per@gmail.com",
    },

] 

app.get("/",(req,res)=>{
   res.send(person)
})

app.get("/about",(req,res)=>{
    res.send("This os about page")
})

app.listen(8080,()=>{
    console.log("server running")
})