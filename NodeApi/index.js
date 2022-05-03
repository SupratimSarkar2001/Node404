console.log("Hello 🎶😜")

const http= require("http");
const fs= require("fs");

const data=fs.readFileSync("./Example.json","utf-8");
const obj=JSON.parse(data);
console.log(obj)
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
    res.writeHead(200,{"content-type":"text/html"});
    res.end("Hello");
    }
    else if(req.url="/api"){
        res.writeHead(200,{"content-type":"application/json"});
        //as we only need to load the data from api once so we need to use syncronise versiom//
        // fs.readFile("./Example.json","utf-8",(err,data)=>{
        //         res.end("here is Your data")
        //         res.end(data)
        // })
        res.end(data);
    }
    else{
        res.writeHead(200,{"content-type":"text/html"});
        res.end("404 Not Found");
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log('Listing on port number 8000')
})