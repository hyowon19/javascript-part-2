// Create a function that can be used with sort. This function should take two 
// strings, and return a value that sort can use to determine which is the longest 
// string. Finally, create an array of strings and try to get it sorted using your 
// new function.

var stringArr = ["Hello", "May I help you?", "two for one", "BOOyah", "You insignificant fool!"];

function longStr (str1, str2) {
    return str2.length - str1.length;
}

console.log(stringArr.sort(longStr));

// Create an array of objects (don’t need to use new here, just regular object literals). 
// These objects will contain a name and email property. Then, run some code that will 
// sort your array by the longest name. Then, run some code that will sort your array by 
// e-mail address in alphabetical order.
var myArray = [
 {name: "Victor", email: "vic123@example.com"},
 {name: "Ben", email: "ben123@example.com"},
 {name: "Zoey", email: "zoe123@example.com"}
];

function cmpName (a, b) {
    return b.name.length - a.name.length;
}

function cmpEmail (a, b) {
    if (a.email < b.email) {
        return -1;
    }
    else if(a.email > b.email) {
        return 1;
    }
    else {
        return 0;
    }
}

console.log(myArray.sort(cmpName));
console.log(myArray.sort(cmpEmail));


// Create a function that can be used with Array.prototype.map. 
// This function should take a number and return its square. Then, use this 
// function with map on an array of numbers to check the result.
var myArray = [77, 3, 45, 2, 9]

function squareNum (x) {
    return x * x;
}

console.log(myArray.map(squareNum));

// Create a function that can be used with Array.prototype.map. 
// This function should be able to take an object and square its “num” property. 
// Then, use this function with map on an array of objects each containming a “num” property.
var myArray2 = [
    {name: "Victor", num: 12},
    {name: "Benny", num: 234},
    {name: "Choa", num: 45},
    {name: "Hootlah", num: 32}
];

console.log(myArray2.map(function(x) {
    return x.num * x.num;
}));

// In a previous workshop, you had to create a function that took two numbers and 
// an operation (add, sub, mult, …) and returned the result of the operation on the 
// two numbers. Here we are going to do the same but at a higher order. Create a function 
// called operationMaker that takes only a string called operation as argument. This string 
// could be “add”, “subtract”, “mult” or “div”. Your function will return a function that 
// will take two numbers and return the result of running operation on these numbers.
function operationMaker(operation) {
    if(operation === "add".toLowerCase()) {
        return function add(a, b) {
            return a + b;
        }
    }
    else if (operation === "subtract".toLowerCase()) {
        return function subtract(a, b) {
            return a - b;
        }
    }
    else if (operation === "mult".toLowerCase()) {
        return function multiply(a, b) {
            return a * b;
        }
    }
    else if (operation === "div".toLowerCase()) {
        return function divide(a, b) {
            return a / b;
        }
    }
}

var adder = operationMaker("add");
var sum = adder(5, 80);

var subtractor = operationMaker("subtract");
var diff = subtractor(76, 9888);

var multiplier = operationMaker("mult");
var product = multiplier(25, 25);

var divider = operationMaker("div");
var quotient = divider(20, 4);

console.log(sum);
console.log(diff);
console.log(product);
console.log(quotient);