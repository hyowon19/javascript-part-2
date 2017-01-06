// ==========================================================================
// DecodeMTL instructors solutions - Workshop 2
// ==========================================================================


// Read about the Array.prototype.sort method. Create a function that can be
// used with sort. This function should take two strings, and return a value
// that sort can use to determine which is the longest string. Finally, create
// an array of strings and try to get it sorted using your new function.

function longuestString(str1, str2) {
  return str1.length - str2.length;
}

var myArrayOfStrings = ["Euro", "segments", "atlas", "coconuts", "Donald", "dog"];
var myArrayOfStringsSorted = myArrayOfStrings.sort(longuestString);
console.log(myArrayOfStringsSorted);


// Create an array of objects (don’t need to use new here, just regular object
// literals). These objects will contain a name and email property. Then, run
// some code that will sort your array by the longest name. Then, run some code
// that will sort your array by e-mail address in alphabetical order.

var contactsArray = [
  {
    name: "Maria",
    email: "maria321@gmail.com"
  },
  {
    name: "Kenny S",
    email: "the.awp.king@hotmail.com"
  },
  {
    name: "Stephan",
    email: "conspiracies@webmail.net"
  },
  {
    name: "Kitty",
    email: "kitty.cheers@yahoo.ca"
  }
];

var contactsByName = contactsArray.sort(function(a, b) {
  return b.name.length - a.name.length;
});

var contactsByEmail = contactsArray.sort(function(a, b) {
  if(a.email < b.email) return -1;
  if(a.email > b.email) return 1;
  return 0;
})

console.log(contactsByName);
console.log(contactsByEmail);


// Create a function that can be used with Array.prototype.map. This function
// should take a number and return its square. Then, use this function with map
// on an array of numbers to check the result.
function square(num) {
  return num * num;
}

var numArray = [3, 4, 8, 1, 2, 11, 432];

var squaredNumArray = numArray.map(square);

console.log(squaredNumArray);


// Create a function that can be used with Array.prototype.map. This function
// should be able to take an object and square its “num” property. Then, use
// this function with map on an array of objects each containming a “num” property.
function squareNumProp(obj) {
  obj.num = obj.num * obj.num;
  return obj;
}

var objArray = [{num: 9}, {num: 5}, {num: 2}, {num: 7}, {num: 1}, {num: 11}];

var squaredObjArray = objArray.map(squareNumProp);

console.log(squaredObjArray);


// In a previous workshop, you had to create a function that took two numbers
// and an operation (add, sub, mult, …) and returned the result of the
// operation on the two numbers. Here we are going to do the same but at a
// higher order. Create a function called operationMaker that takes only a
// string called operation as argument. This string could be “add”, “subtract”,
// “mult” or “div”. Your function will return a function that will take two
// numbers and return the result of running operation on these numbers.
function operationMaker(str) {
  if (str === 'add') {
    return function(x, y) {
      return x + y;
    }
  }
  else if (str === 'sub') {
    return function(x, y) {
      return x - y;
    }
  }
  else if (str === 'mult') {
    return function(x, y) {
      return x * y;
    }
  }
  else if (str === 'div') {
    return function(x, y) {
      return x / y;
    }
  }
  else {
    return function(x, y) {
      return "incorrect operand, please use either add, sub, mult or div";
    }
  }
}

var adder = operationMaker('add');
var substracter = operationMaker('sub');
var multiplier = operationMaker('mult');

var sum = adder(4,8);
var difference = substracter(13, 9);
var product = multiplier(7, 7);

var division = operationMaker('div')(21, 7);

console.log(sum);
console.log(difference);
console.log(product);
console.log(division);
