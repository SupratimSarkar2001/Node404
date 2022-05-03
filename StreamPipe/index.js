const http= require("http");

const fs=require("fs");//in order to use streming
const server=http.createServer((req,res)=>{
 const rs=fs.createReadStream("./input.txt");
  
 rs.pipe(res);
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("I am listning")
})