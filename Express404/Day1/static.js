//this is the method to render static website using express js
const express=require("express");
const path=require("path");
const spath=path.join(__dirname,"/public")
console.log(spath)

const app= express();
app.use(express.static(spath))
app.get("/",(req,res)=>{
res.send("Hello from the server");
})

app.listen(8000,()=>{
    console.log("Listning")
})