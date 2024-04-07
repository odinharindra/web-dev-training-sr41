// Array Methods

// 1. concat() - Joins two or more arrays, and returns a copy of the joined arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]

// 2. copyWithin() - Copies array elements within the array, to and from specified positions
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log(fruits); // ["Banana", "Orange", "Banana", "Orange"]

// 3. push() - Adds new elements to the end of an array, and returns the new length
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.push("Kiwi");
console.log(fruits2); // ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

// 4. pop() - Removes the last element of an array, and returns that element
let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.pop();
console.log(fruits3); // ["Banana", "Orange", "Apple"]

// 5. shift() - Removes the first element of an array, and returns that element
let fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.shift();
console.log(fruits4); // ["Orange", "Apple", "Mango"]

// 6. unshift() - Adds new elements to the beginning of an array, and returns the new length
let fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.unshift("Kiwi");
console.log(fruits5); // ["Kiwi", "Banana", "Orange", "Apple", "Mango"]

// 7. reverse() - Reverses the order of the elements in an array
let fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.reverse();
console.log(fruits6); // ["Mango", "Apple", "Orange", "Banana"]

// 8. slice() - Selects a part of an array, and returns the new array
let fruits7 = ["Banana", "Orange", "Apple", "Mango"];
let citrus = fruits7.slice(1, 4);
console.log(citrus); // ["Orange", "Apple", "Mango"]

// 9. sort() - Sorts the elements of an array
let fruits8 = ["Banana", "Orange", "Apple", "Mango"];
fruits8.sort();
console.log(fruits8); // ["Apple", "Banana", "Mango", "Orange"]

// 10. Sort reverse
let fruits9 = ["Banana", "Orange", "Apple", "Mango"];
fruits9.sort().revserse();
console.log(fruits9); // ["Orange", "Mango", "Banana", "Apple"]

// 11. splice() - Adds/Removes elements from an array
let fruits10 = ["Banana", "Orange", "Apple", "Mango"];
fruits10.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits10); // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
