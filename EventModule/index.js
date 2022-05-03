console.log("It helps you to create your own events using events class");

//craeting object of events class
const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayHello",()=>{
    console.log("Hello");//defination of sayHello event;
})

event.emit("sayHello");//creating a event;


//creating a parameterised event;
event.on("Hello",(a,b)=>{
    console.log(`${a} say hi to ki ${b}?`)
})


event.emit("Hello",12,"ok");