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