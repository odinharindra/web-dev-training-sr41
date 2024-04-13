# JS Inbuilt Object Methods

Check here for [MDN Resources](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) for more detailed documentation

JavaScript provides several built-in methods for working with objects. These methods allow you to inspect, manipulate, and transform objects in various ways. Here are some of the most commonly used object methods along with example code for each:

### `Object.keys()`

- **Description**: Returns an array of a given object's property keys (own enumerable properties).
- **Example**:
  ```javascript
  const obj = { name: "Alice", age: 25, country: "USA" };
  const keys = Object.keys(obj);
  console.log(keys); // Output: ["name", "age", "country"]
  ```

### `Object.values()`

- **Description**: Returns an array of a given object's property values (own enumerable properties).
- **Example**:
  ```javascript
  const obj = { name: "Alice", age: 25, country: "USA" };
  const values = Object.values(obj);
  console.log(values); // Output: ["Alice", 25, "USA"]
  ```

### `Object.entries()`

- **Description**: Returns an array of a given object's key-value pairs as arrays.
- **Example**:
  ```javascript
  const obj = { name: "Alice", age: 25, country: "USA" };
  const entries = Object.entries(obj);
  console.log(entries); // Output: [["name", "Alice"], ["age", 25], ["country", "USA"]]
  ```

### `Object.assign()`

- **Description**: Copies properties from source objects to a target object.
- **Example**:
  ```javascript
  const target = { name: "Alice" };
  const source = { age: 25, country: "USA" };
  Object.assign(target, source);
  console.log(target); // Output: { name: "Alice", age: 25, country: "USA" }
  ```

### `Object.freeze()`

- **Description**: Freezes an object, making it immutable (i.e., its properties cannot be added, removed, or changed).
- **Example**:

  ```javascript
  const obj = { name: "Alice", age: 25 };
  Object.freeze(obj);

  // Trying to modify the object
  obj.name = "Bob"; // Will not change the name property

  console.log(obj); // Output: { name: "Alice", age: 25 }
  ```

### `Object.seal()`

- **Description**: Seals an object, preventing the addition or removal of properties, but allowing modifications to existing properties.
- **Example**:

  ```javascript
  const obj = { name: "Alice", age: 25 };
  Object.seal(obj);

  // Trying to add a new property (will not work)
  obj.country = "USA"; // Ignored

  // Modifying an existing property (will work)
  obj.name = "Bob";

  console.log(obj); // Output: { name: "Bob", age: 25 }
  ```

### `Object.getPrototypeOf()`

- **Description**: Returns the prototype of a given object.
- **Example**:
  ```javascript
  const obj = { name: "Alice" };
  const prototype = Object.getPrototypeOf(obj);
  console.log(prototype); // Output: [Object: null prototype] {}
  ```

These methods provide you with the ability to work with objects effectively in JavaScript. There are other methods and properties available for more advanced object manipulation and inspection.
