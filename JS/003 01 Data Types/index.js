// List of Javascript data types
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Object
// 7. Array

// Example for Number data type
var num = 42;
var num2 = 10.05;

// Example for String data type, We write string in single or double quotes
var str = "Hello World!"; // Double quotes to write string
var str2 = "Hello World"; // Single quotes to write string

var complexStr1 = "Let's win the world"; // Single quotes inside double quotes
var complexStr2 = "Let's win the world"; // Escape character inside single quotes

var complexStr3 = 'He said, "I am happy"'; // Double quotes inside double quotes

// Example for Boolean data type
var isTrue = true;
var isFalse = false;

// Example for Undefined data type
var x;
console.log(x); // undefined

// Example for Null data type
var y = null;
console.log(y); // null

// Example for Object data type

var me = {
  name: "John",
  age: 25,
  isMarried: false,
  address: {
    city: "New York",
    state: "NY",
  },
  hasCar: undefined,
  isLocatedAbroad: null,
};

console.log(me.name); // John
console.log(me.isMarried); // false

// A javascript object can have properties of any data type
// In the above object, name is a string, age is a number, isMarried is a boolean and address is an object
// A property is a key-value pair. name is a key and "John" is a value

// Example for Array data type
var fruits = ["Apple", "Banana", "Orange"]; // Array of strings
// We write array elements inside square brackets and separate them with commas
// Array elements can be of any data type
var mixedArray = [1, "Apple", true, null, undefined, { name: "John" }];
// In the above array, we have elements of different data types
// An array is similar to an object, but the keys are numbers starting from 0

// To access the string 'Apple' in the fruits array, we use the index 0
fruits[0]; // Apple
fruits[1]; // Banana
fruits[2]; // Orange
fruits[3]; // undefined
