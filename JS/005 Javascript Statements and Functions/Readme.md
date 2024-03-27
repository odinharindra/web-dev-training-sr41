## Javascript Statements and Functions

In JavaScript, statements are instructions that tell the computer what to do. They are like sentences in a programming language, and each statement performs a specific action. Here's a simple explanation:

1. **Basic Statements:**

   - Basic statements perform actions such as declaring variables, assigning values, or calling functions.
   - Example:
     ```javascript
     let name = "John"; // Declare a variable and assign a value
     console.log("Hello, " + name + "!"); // Call the console.log function
     ```

2. **Conditional Statements:**

   - Conditional statements allow the program to make decisions based on conditions.
   - Example:
     ```javascript
     let age = 20;
     if (age >= 18) {
       console.log("You are an adult.");
     } else {
       console.log("You are a minor.");
     }
     ```

3. **Looping Statements:**

   - Looping statements allow the program to repeat a block of code multiple times.
   - Example:
     ```javascript
     for (let i = 0; i < 5; i++) {
       console.log(i);
     }
     ```

4. **Function Statements:**

   - Function statements define reusable blocks of code that can be executed by calling the function.
   - Example:
     ```javascript
     function greet(name) {
       console.log("Hello, " + name + "!");
     }
     greet("Alice");
     ```

5. **Return Statements:**

   - Return statements are used inside functions to return a value back to the caller.
   - Example:
     ```javascript
     function add(a, b) {
       return a + b;
     }
     let sum = add(3, 5);
     ```

6. **Error Handling Statements:**
   - Error handling statements, like `try`, `catch`, and `finally`, help manage errors that may occur during execution.
   - Example:
     ```javascript
     try {
       // Code that may throw an error
     } catch (error) {
       console.log("An error occurred: " + error.message);
     } finally {
       console.log("This will always be executed.");
     }
     ```

These are some of the basic types of statements in JavaScript. Each statement tells the computer what to do, helping to create logic and functionality in a program.
