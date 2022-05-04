const express=require("express");
const path=require("path")
const pathab=path.join(__dirname,"/temp")
const app= express();
app.set("view engine","hbs")
app.set("views",pathab)

app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/",(req,res)=>{
    res.send("hello Man")
})

app.listen(8000,()=>{
    console.log("ya")
})