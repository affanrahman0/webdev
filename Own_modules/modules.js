console.log("This is modules");

function average(arr)
{
    let sum =0;
    arr.forEach(element => {
        sum+= element;
    });
    return sum/arr.length;
}
// module.exports = average; // Exporting a single function

module.exports ={   // Exporting multiple items as an object
    avg : average,
    name: "Antonio",
    Place: "London"
}