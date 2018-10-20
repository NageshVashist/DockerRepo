const express= require("express");

const app = new express();

app.get("/",(req,res)=>{
    res.send("Hi, There");
});

app.listen(8080,()=>
{
    console.log("Listening to port 8080");
});