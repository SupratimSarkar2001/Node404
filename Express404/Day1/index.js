//Express is a frame work of Node js --> make our life Easy.

const express=require("express");

const app=express();

//get data from home 
app.get("/",(req,res)=>{
   res.send("Hello I am Express Home")//what to show in home page
})

//listning 
app.listen(8000,()=>{
    console.log("Always Listing sir 8000 ")
})