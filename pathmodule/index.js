const path=require("path");
console.log("Hello path");

//path finding
// console.log(path.basename("E:/NodeTutorials/Node404/pathmodule/index.js"));
// console.log(path.parse("E:/NodeTutorials/Node404/pathmodule/index.js"));
const dir=path.dirname('E:/NodeTutorials/Node404/pathmodule/index.js')
console.log(dir);

//extension name
const ext=path.extname('E:/NodeTutorials/Node404/pathmodule/index.js')
console.log(ext);