console.log("hello Own Bc.")

//one way
const Math=require("./Math");

console.log(Math.sum(1,3));

//object destructuring way of doing
const {sum,sub,mul}=require("./Math")
console.log("🤷‍♀️"+" "+sum(2,100));
console.log("🐱‍🏍"+" "+sub(200,100));
console.log("🐱‍👤"+" "+mul(2,100));