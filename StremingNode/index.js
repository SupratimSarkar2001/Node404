console.log("Streming -> reading Data chunk by Chunk thats help us to save our data while loading the data like youtube")

const http= require("http");

const fs=require("fs");//in order to use streming
const server=http.createServer((req,res)=>{
 const rs=fs.ReadStream("./input.txt");
 rs.on("data",(chunkdata)=>{
     res.write(chunkdata);
     res.end();
 })
 rs.on("end",()=>{
     res.end("end");
 })
 rs.on("error",(e)=>{
     console.log(e)
res.end("the file has some error")
 })
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("I am listning")
})