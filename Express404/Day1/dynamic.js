
const express= require("express");
const app=express();
app.set("view engine","hbs")

app.get("/",(req,res)=>{
    res.render("index",{Name:"Supratim"})
})

app.get("/",(req,res)=>{
  res.send("hello")
})

app.listen(8000,()=>{
    console.log("listning")
})