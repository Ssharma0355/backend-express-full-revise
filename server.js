const express = require("express")

const app = express();

app.get("/",(req,res)=>{
   res.send("hi sachin")
})

app.listen(8080,()=>{
    console.log("server running")
})