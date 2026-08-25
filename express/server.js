const express = require('express');
const app=express(); //--> this line is equivalent to http.create Server;
app.get("/",(req,res)=>{
    res.send("you are at home page");
})
app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})
