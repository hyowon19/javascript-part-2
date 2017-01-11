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