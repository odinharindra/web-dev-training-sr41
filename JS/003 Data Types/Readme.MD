## Data types

JavaScript has several basic data types that represent different kinds of values. Here's a simple explanation of each:

1. **Numbers:** Numeric data types represent numbers. They can be integers (whole numbers) or floating-point numbers (numbers with decimals). For example: `10`, `3.14`, `-7`.

2. **Strings:** Strings represent text data. They are sequences of characters enclosed within single (`'`) or double (`"`) quotes. For example: `'Hello'`, `"JavaScript"`, `'123'`.

3. **Booleans:** Boolean data types represent logical values. They can have only two values: `true` or `false`. They are often used in conditional statements and comparisons. For example: `true`, `false`.

4. **Null:** The `null` data type represents the absence of any value. It is a special keyword in JavaScript used to indicate that a variable does not have a value assigned to it. For example: `null`.

5. **Undefined:** The `undefined` data type represents a variable that has been declared but not assigned a value. It is the default value of uninitialized variables. For example: `undefined`.

6. **Objects:** Objects are complex data types that can hold multiple values as properties. They are collections of key-value pairs, where keys are strings (or symbols) and values can be of any data type, including other objects. For example: `{ name: 'John', age: 30 }`.

7. **Arrays:** Arrays are ordered collections of values. They can hold multiple values of any data type, and each value is accessed by its index (a numerical position within the array). For example: `[1, 2, 3]`, `['apple', 'banana', 'orange']`.

8. **Symbols:** Symbols are a unique and immutable data type introduced in ES6. They are often used as property keys in objects to prevent accidental property name collisions. For example: `Symbol('description')`.

These are the basic data types in JavaScript. Understanding them is essential for working with variables and manipulating data within your JavaScript code.

## What is a `Property` in javascript object?

let's break it down into a simple explanation:

In JavaScript, an object is like a container that holds information. Think of it as a box with compartments. Each compartment has a label, and you can put different things inside each compartment.

Now, each label on the compartments is called a property. It's just a way to identify what's inside. For example, if you have an object representing a person, you might have properties like "name," "age," and "city."

```javascript
let person = {
  name: "John", // "name" is a property with the value 'John'
  age: 30, // "age" is a property with the value 30
  city: "New York", // "city" is a property with the value 'New York'
};
```

So, in simple terms, a property in a JavaScript object is just a label that helps you identify and access the information stored inside that object.
