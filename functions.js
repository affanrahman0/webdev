console.log("Hey there how are you doing");
function print(name,greet= "Have a great day")
{
    console.log(name + " is the best boy");
    console.log(greet);
}
let name1 = "affan";
let name2 = "zaffan";
let name3 = "laffan";
let name4 = "naffan";
let greet = "GOOD MORNING !!";
print(name1,greet);
print(name2); // since print takes two parameter but we are passing just one , so it will take a default value(if its declared in the function)
print(name3);
print(name4);