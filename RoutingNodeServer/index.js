console.log("Hello Pussy😽")

const http= require("http");
const { type } = require("os");

const server= http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url==="/"){
    res.end("I am here For you Pussy")
    }
    else if(req.url==="/about"){
        res.end("You want to know about me!!")
    }
    else if(req.url==='/contact'){
        res.end("you want to connect with me?")
    }
    else{
        res.writeHead(404,{"context-type":"text/html"})//404-> error,200-> ok status... and the 2nd argument is the response type
        res.end("<h1>404 Not Found<h1>");
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("Hello Mew Mew 🐱‍🚀");
})