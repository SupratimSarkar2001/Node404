console.log("I am Here Fore Node json Tutorial")

//js object
const data={
    name:"Supratim",
    age:24,
    location:"Bagmore"
}

//object to json
const jsonData= JSON.stringify(data);

console.log(jsonData);

//back in to object from json
const objdata=JSON.parse(jsonData);
console.log(objdata);