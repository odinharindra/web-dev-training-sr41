## Variables

In JavaScript, variables are containers used to store data values. They act as labels for values, making it easier to reference and manipulate data within a program. You can think of variables as boxes where you can store different types of information, such as numbers, strings, or boolean values.

JavaScript provides three main ways to declare variables:

1. **var:**

   - `var` is the oldest way to declare variables in JavaScript.
   - Variables declared with `var` can be reassigned new values later in the code.
   - They can also be declared multiple times within the same scope.

2. **let:**

   - `let` is a newer addition introduced in ES6 (ECMAScript 2015).
   - Variables declared with `let` can also be reassigned new values later in the code.
   - However, re-declaring the same variable within the same block is not allowed.

3. **const:**
   - `const` is also introduced in ES6.
   - Variables declared with `const` are constant; their value cannot be changed once initialized.
   - Like `let`, re-declaring the same variable within the same block is not allowed.

Here's a simplified example demonstrating variable declarations in JavaScript:

```javascript
// Using var
var age = 30;
console.log(age); // Output: 30

// Using let
let name = "John";
console.log(name); // Output: John

// Using const
const PI = 3.14;
console.log(PI); // Output: 3.14
```

In summary, variables in JavaScript allow you to store and work with data in your programs. `var`, `let`, and `const` are three ways to declare variables, each with its own behavior regarding reassignment and re-declaration.
