# Class

In JavaScript, a class is a template or blueprint for creating objects that encapsulate data and behavior. Classes were introduced in ECMAScript 2015 (ES6) and provide a cleaner, more intuitive way to create and manage objects compared to traditional prototype-based inheritance.

A JavaScript class can contain properties (also known as fields) and methods (functions) that define the behavior of objects created from the class. Here's a brief overview of key aspects of JavaScript classes:

1. **Class Declaration**: A class can be declared using the `class` keyword followed by the class name.

   ```javascript
   class Person {
     constructor(name, age) {
       this.name = name; // Property
       this.age = age; // Property
     }

     greet() {
       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
     }
   }
   ```

   In the example above, a class `Person` is declared with a constructor function and a method `greet()`.

2. **Constructor**: The `constructor` method is a special function that is automatically called when an object is instantiated from the class. It initializes the properties of the object.

3. **Methods**: Functions defined within a class are called methods. Methods can be called on objects created from the class.

4. **Instantiation**: To create an instance of a class, use the `new` keyword followed by the class name and any required parameters for the constructor.

   ```javascript
   const person1 = new Person("Alice", 25);
   person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
   ```

5. **Inheritance**: Classes can inherit from other classes using the `extends` keyword. This allows a class to inherit properties and methods from a parent class.

   ```javascript
   class Employee extends Person {
     constructor(name, age, jobTitle) {
       super(name, age); // Call parent class constructor
       this.jobTitle = jobTitle;
     }

     work() {
       console.log(`${this.name} is working as a ${this.jobTitle}.`);
     }
   }

   const employee1 = new Employee("Bob", 30, "Developer");
   employee1.greet(); // Output: Hello, my name is Bob and I am 30 years old.
   employee1.work(); // Output: Bob is working as a Developer.
   ```

6. **Static Methods**: Methods can be marked as `static` using the `static` keyword. Static methods belong to the class itself rather than instances of the class.

   ```javascript
   class MathUtils {
     static square(number) {
       return number * number;
     }
   }

   const result = MathUtils.square(4); // result will be 16
   ```

7. **Getter and Setter Methods**: Classes can define getter and setter methods using the `get` and `set` keywords to control access to properties.

   ```javascript
   class Rectangle {
     constructor(width, height) {
       this._width = width;
       this._height = height;
     }

     get area() {
       return this._width * this._height;
     }

     set width(newWidth) {
       this._width = newWidth;
     }

     set height(newHeight) {
       this._height = newHeight;
     }
   }

   const rect = new Rectangle(5, 10);
   console.log(rect.area); // Output: 50
   ```

These are some of the key concepts related to JavaScript classes and how they are used to encapsulate data and behavior in objects.
