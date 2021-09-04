// blocking/ synchronus
//line by line execution

// non-blocking/ asynchronus
// it seems like its not an line by line execution and call backs will fire

const fs = require("fs");
fs.readFile("eg.txt","utf-8",(err,data)=>{
    console.log(err,data);
});
console.log("This is a message that has been fired before call back");