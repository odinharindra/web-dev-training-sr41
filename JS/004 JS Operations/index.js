// Basic javascript operations
// JavaScript provides a set of operations that can be performed on variables and values.
// These operations include arithmetic, comparison, logical, and assignment operations.

// Arithmetic operations
// Arithmetic operations are used to perform mathematical calculations.
// JavaScript supports the following arithmetic operations:
// 1. Addition (+)
// 2. Subtraction (-)
// 3. Multiplication (*)
// 4. Division (/)
// 5. Modulus (%)
// 6. Increment (++)
// 7. Decrement (--)

// Example for arithmetic operations
var num1 = 10;
var num2 = 5;

var sum = num1 + num2; // Addition
console.log(sum); // 15

var difference = num1 - num2; // Subtraction
console.log(difference); // 5

var differnce2 = num2 - num1; // Subtraction
console.log(differnce2); // -5

var product = num1 * num2; // Multiplication
console.log(product); // 50

var quotient = num1 / num2; // Division
console.log(quotient); // 2

var remainder = num1 % num2; // Modulus
console.log(remainder); // 0

var num3 = 5;
var num4 = 7;

var remainder2 = num4 % num3; // Modulus
console.log(remainder2); // 2

var x = 5;
x++; // Increment => x = x + 1;
console.log(x); // 6

var y = 10;
y--; // Decrement => y = y - 1;
console.log(y); // 9

var z = 5;
--z; // Decrement => z = z - 1;
console.log(z); // 4

// Comparison operations
// Comparison operations are used to compare two values.
// JavaScript supports the following comparison operations:
// 1. Equal to (==)
// 2. Not equal to (!=)
// 3. Greater than (>)
// 4. Less than (<)
// 5. Greater than or equal to (>=)
// 6. Less than or equal to (<=)
// 7. Strict equal to (===)
// 8. Strict not equal to (!==)

// Example for comparison operations
var a = 5;
var b = 10;

console.log(a == b); // false
console.log(a != b); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true

var c = 5;
var d = "5"; // String

console.log(c == d); // true
console.log(c === d); // false
console.log(c != d); // false
console.log(c !== d); // true

// Logical operations
// Logical operations are used to perform logical operations on boolean values.
// JavaScript supports the following logical operations:
// 1. Logical AND (&&)
// 2. Logical OR (||)
// 3. Logical NOT (!)

// Example for logical operations
var x = true;
var y = false;

console.log(x && y); // false
console.log(x || y); // true

console.log(!x); // false
console.log(!y); // true

// Assignment operations
// Assignment operations are used to assign values to variables.
// JavaScript supports the following assignment operations:
// 1. Assignment (=)
// 2. Addition assignment (+=)
// 3. Subtraction assignment (-=)
// 4. Multiplication assignment (*=)
// 5. Division assignment (/=)
// 6. Modulus assignment (%=)

// Example for assignment operations
var a = 5;
var b = 10;

a += b; // a = a + b;
console.log(a); // 15

var c = 10;
var d = 5;

c -= d; // c = c - d;
console.log(c); // 5

var e = 5;
var f = 10;

e *= f; // e = e * f;
console.log(e); // 50

var g = 10;
var h = 5;

g /= h; // g = g / h;
console.log(g); // 2

var i = 10;
var j = 3;

i %= j; // i = i % j;
console.log(i); // 1

// JavaScript also supports other operations like bitwise, string, and conditional operations.
// These operations are used in specific scenarios and are not covered in this example.
// You can refer to the JavaScript documentation for more information on these operations.
