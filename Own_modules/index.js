console.log("This is index");
// const average = require("./modules"); //importing a single function
// console.log(average([4,5,7,9]));


const mod = require("./modules") //importing multiple functions as an object
console.log(mod.avg([4,5,7,9]));
console.log(mod.name);