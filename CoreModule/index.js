//all the modules in node js are pre defind
 //0k! lest start with file system.

 const fs= require("fs");

 //creating a new file uso=ing node
  fs.writeFileSync("index.txt","Hello Gys")

  //overwritte the existing file
  fs.writeFileSync("index.txt","Hello World")

  //add new line in existing file
  fs.appendFileSync("index.txt"," I add this line using node");

// change the file name 
fs.renameSync("index.txt","dummydata.txt");

//read data using node
const bufferdata= fs.readFileSync("index.txt");
console.log(bufferdata);
//original data
console.log(bufferdata.toString());