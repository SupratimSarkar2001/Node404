console.log("Hello")


const fs= require("fs")

// creating a new folder
fs.mkdirSync("Demo")

//creating a new file in demo
fs.writeFileSync("Demo/index.txt","Hello i am Demo index");

//append data in index.txt;
fs.appendFileSync("Demo/index.txt"," I have added this Line for fun")

//read file data;
const data=fs.readFileSync("Demo/index.txt");//only doing this you will get the buffer type data eighter you have to toString() that in output.
console.log(data.toString());

//another type.-->using endoing 
const datadir=fs.readFileSync("Demo/index.txt","utf-8")
console.log(datadir)


//delete a file --> index2.txt was present .
fs.rmSync("Demo/index2.txt");