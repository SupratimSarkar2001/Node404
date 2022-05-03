//here we gonna learn about express routing

const express= require("express");
const app= express();
app.get("/",(req,res)=>{
 res.send("This is Home Page")
})
app.get("/about",(req,res)=>{
    res.send("This is About Page");
})
app.get("/duckoff",(req,res)=>{
   res.send("Duck off Page")
})

app.listen(8000,()=>{
    console.log("Ya I am Listning")
})