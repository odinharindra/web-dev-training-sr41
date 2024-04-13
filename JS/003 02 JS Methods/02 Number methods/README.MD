# JS Inbuilt Number Methods

Check here for [MDN Resources](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) for more detailed documentation

JavaScript provides several built-in methods and properties for working with numbers. These methods and properties allow you to perform various operations such as rounding, formatting, parsing, and checking number properties. Here are some of the most commonly used methods and properties related to numbers in JavaScript:

### Number Properties

- **`Number.MAX_VALUE`**: Represents the largest possible value a number can have in JavaScript.
- **`Number.MIN_VALUE`**: Represents the smallest positive value a number can have in JavaScript.
- **`Number.NaN`**: Represents "Not a Number."
- **`Number.POSITIVE_INFINITY` and `Number.NEGATIVE_INFINITY`**: Represent positive and negative infinity, respectively.

### Example:

```javascript
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // Output: 5e-324
console.log(Number.NaN); // Output: NaN
console.log(Number.POSITIVE_INFINITY); // Output: Infinity
console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity
```

### `Number` Methods

- **`Number.isNaN()`**: Determines whether a value is `NaN`.
- **`Number.isFinite()`**: Determines whether a value is a finite number.
- **`Number.parseInt()`**: Parses a string to an integer.
- **`Number.parseFloat()`**: Parses a string to a floating-point number.

### Example:

```javascript
console.log(Number.isNaN(NaN)); // Output: true
console.log(Number.isFinite(123)); // Output: true
console.log(Number.isFinite(Infinity)); // Output: false

const intNum = Number.parseInt("123");
console.log(intNum); // Output: 123

const floatNum = Number.parseFloat("123.456");
console.log(floatNum); // Output: 123.456
```

### Methods for Working with Numbers

- **`toFixed()`**: Rounds a number to a specified number of decimal places and returns it as a string.
- **`toPrecision()`**: Formats a number to a specified precision and returns it as a string.
- **`toString()`**: Converts a number to a string, with an optional radix (base) for conversion.

### Example:

```javascript
const num = 123.4567;

console.log(num.toFixed(2)); // Output: "123.46" (rounded to 2 decimal places)
console.log(num.toPrecision(4)); // Output: "123.5" (formatted to 4 significant digits)
console.log(num.toString()); // Output: "123.4567"
console.log(num.toString(16)); // Output: "7b.74aefa36e96c0" (number as a hexadecimal string)
```

These methods and properties provide you with tools to work with numbers efficiently in JavaScript.
