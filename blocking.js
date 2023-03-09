var fs = require("fs");
var data = fs.readFileSync('hello.txt');
console.log(data.toString());
console.log("Program Ended");