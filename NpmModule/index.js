const chalk=require("chalk");
console.log(chalk.rgb(15, 100, 204).inverse.bold("Testing Email...."));
const  validator = require('validator');
const res=validator.isEmail("supratim@2101.com")
console.log(res?chalk.green.inverse("Success"):chalk.red.inverse("Failed"));
const res2=validator.isEmail("supratim@cm")
console.log(res2?chalk.green.inverse("Success"):chalk.red.inverse("Failed"));