// Create a function that can be used with sort. This function should take two 
// strings, and return a value that sort can use to determine which is the longest 
// string. Finally, create an array of strings and try to get it sorted using your 
// new function.

var stringArr = ["Hello", "May I help you?", "two for one", "BOOyah", "You insignificant fool!"];

function longStr (str1, str2) {
    return str2.length - str1.length;
}

console.log(stringArr.sort(longStr));

