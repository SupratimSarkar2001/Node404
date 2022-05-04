const express=require("express");
const path=require("path")
const pathab=path.join(__dirname,"/temp/view")
const partialPath=path.join(__dirname,"/temp/partials")
const hbs=require("hbs")
const app= express();
app.set("view engine","hbs")
app.set("views",pathab)
hbs.registerPartials(partialPath)

app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/about",(req,res)=>{
    res.render("About")
})
app.get("/",(req,res)=>{
    res.send("hello Man")
})

app.listen(8000,()=>{
    console.log("ya")
})