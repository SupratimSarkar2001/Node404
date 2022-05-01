const fs= require("fs");
//create a file 
fs.writeFile("index.txt","Hello Async world",(e)=>{
 console.log("File has been Created");
 console.log(e);
});

//add content in file
fs.appendFile("index.txt","I append this Line Asyncly",(e)=>{
   console.log("Line has been Added");
   console.log(e);
})

//read content.
fs.readFile("index.txt","utf-8",(e,data)=>{
    console.log(e);
    console.log(data);
})