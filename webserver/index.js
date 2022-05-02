//creating our web server using node js

const http= require("http");

//creating a server;
const server=http.createServer((req,res)=>{
    res.end("Ok I am here 🐱‍🚀");//this response will show in the webpage.
})

//this code will be seen after the listning from the server
server.listen(8000,"127.0.0.1",()=>{
    console.log("Listning0");
})