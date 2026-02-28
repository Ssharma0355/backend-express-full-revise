// To  create server 
const express = require("express");

const app = express();

app.use(express.json());

const notes = []

// creating notes 
app.post("/notes",(req,res)=>{
    notes.push(req.body);
    res.send("Added")
})

// get notes
app.get("/notes",(req,res)=>{
    res.send(notes)
})

// we exports the app instance
module.exports = app