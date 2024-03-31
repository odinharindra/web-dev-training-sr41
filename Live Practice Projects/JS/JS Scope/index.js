// // function sayHello3() {
// //   console.log(globalVar3, globalVar4); // Accessible
// // }

// // let globalVar3 = "I am global 2";
// // var globalVar4 = "I am global 4";

// // sayHello3(); // Output: ?

// // function sayHello3() {
// //   let globalVar3 = "I am global 3";
// //   var globalVar4 = "I am global 4";
// //   console.log(globalVar3, globalVar4); // Accessible

// //   function sayHello4() {
// //     console.log(globalVar3, globalVar4); // Accessible
// //   }

// //   sayHello4();
// // }

// // sayHello3(); // Output: ?
// // console.log(globalVar4); // Accessible
// // console.log(globalVar3);

// // Example code for understanding global scope and local scope

// let me = "harindra";

// function whoAmI() {
//   var myAge = 29;
//   console.log("Hi, I am " + me + " and I am " + myAge + " years old");
//   return myAge;

//   // Hi I am harindra and I am 29 years old
// }

// // const person = {
// //   name: "harindra",
// //   age: 29,
// //   whoAmI: function () {
// //     console.log("Hi, I am " + this.name + " and I am " + this.age + " years old");
// //   },

// // };

// // console.log(person.name);

// whoAmI();
// console.log("Hi, I am " + me + " and I am " + whoAmI() + " years old");

// // What is global scope in JS
// // What is local scope in JS
// // What is block scope in JS
// // What is function scope in JS

// // Example for Global scope

// let globalVar = "I am global";

// console.log(globalVar); // 'I am global';

// function sayHello() {
//   console.log(globalVar); // 'I am global';
// }

// // Example for Local scope

// function sayHello2() {
//   let localVar = "I am local";
//   console.log(localVar); // 'I am local';
// }

// console.log(localVar); // ReferenceError: localVar is not defined

// // Example for Block scope

// if (true) {
//   // Block scope
//   let blockVar = "I am block";
//   console.log(blockVar); // 'I am block';
// }

// console.log(blockVar); // ReferenceError: blockVar is not defined

// // Example for Function scope

// function greetMe() {
//   let me = "Harindra";

//   function sayHello() {
//     var myAge = 29;

//     function alsoSayAge() {
//       console.log("Hello, I am " + me + "!, and I am " + myAge + "years old");
//     }

//     alsoSayAge();
//     console.log(myAge); // 29
//   }

//   console.log(myAge); // ReferenceError: myAge is not defined

//   sayHello();
// }

// greetMe();

// let me = "harindra";
// //
// //
// //
// //
// //

// me = "harindra Masna";
