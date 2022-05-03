//parsing html data and json data using express on webpage
const express= require("express");

const app= express();

app.get("/",(req,res)=>{
    res.send("Hello");
})
app.get("/singlelinehtml",(req,res)=>{
    res.send("<h1>I am sending Response thriugh Express</h1>")
})
app.get("/multilinehtml",(req,res) =>{
    res.write("<h1>I am line 1</h1>")
    res.write("<h2>I am line 2</h2>")
    res.send()
})
app.get("/getjson",(req,res)=>{
res.send([{
    name:"Hello",
    saybay:"Hello bye",
    number:"108"
}])
})
app.get("/getjson2",(req,res)=>{
    res.json([{
        name:"Hello",
        saybay:"Hello bye",
        number:"108"
    }])

})

app.listen(8000,()=>{
    console.log("ha ha Listning To youu")
})