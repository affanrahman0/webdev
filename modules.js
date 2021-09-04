//LISTS OF MODEJS MODULES(FOR SEARCHING)
const fs = require("fs");
let text = fs.readFileSync("eg.txt","utf-8"); // reading a text file
text = text.replace("Sam", "Ramona");
console.log(text);
console.log("The new file has been created");
fs.writeFileSync("Shades.txt",text);

