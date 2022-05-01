console.log("Hello Async CURD")



const fs= require("fs");

//creating a new Folder 
fs.mkdir("DemoAsync",(e)=>{
  console.log("New Folder has been Created");
  console.log(e);
});

//creating a new file
fs.writeFile("DemoAsync/index.txt","I am added Baby",(e)=>{
console.log(e);
console.log("File has been created");
})

//updating that file
fs.appendFile("DemoAsync/index.txt","\nI am added Baby3",(e)=>{
console.log(e);
console.log("File has been updated");
})

//raed the data in the file
fs.readFile("DemoAsync/index.txt","utf-8",(e,data)=>{
    console.log(e);
    console.log(data);
})


//delete a file --> index2.txt;
fs.unlink("DemoAsync/index2.txt",(e)=>{
    console.log(e);
})
