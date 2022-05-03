console.log("Welcome you to HahaTest")
const fs=require("fs");

const data={
    work:"haha",
    time:"11:20",
    Love:true
}

fs.writeFile("index.json",JSON.stringify(data),(e)=>{
console.log("Data has been sent")
})


fs.readFile("index.json",'utf-8',(e,data)=>{
 console.log(e);
 console.log(data);
 console.log(JSON.parse(data));
})
