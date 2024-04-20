function addition(num1, num2) {
  return num1 + num2;
}

function student(name, age, rollno) {
  var name = name;
  var age = age;
  var rollno = rollno;
  var grade = 0;

  function addGrade(grade) {
    this.grade = grade;
  }

  return {
    name: name,
    age: age,
    rollno: rollno,
    grade: grade,
    addGrade: addGrade,
  };
}

var student1 = student("John", 20, 1);
var student2 = student("Doe", 21, 2);

function doSomethingElse() {
  student1 = {};
}

doSomethingElse();

console.log(student1, student2);

class StudentShortData {
  constructor(name, age) {
    this.name = name; // Property
    this.age = age; // Property
    this.grade = 0; // Property
  }

  lookupGrade() {
    return `This student, "${this.name}" has a grade of ${this.grade}`;
  }
}

const Student1 = new StudentShortData("John", 20);

Student1.grade = 10;

console.log(Student1.lookupGrade());

// class StudentInfo

// StudentShortData => name, age, rollno, grade
// StudentFullData => name, age, rollno, grade, bio, address, phone

class StudentFullData extends StudentShortData {
  constructor(name, age, grade, bio, address, phone) {
    super(name, age);
    this.grade = grade;
    this.bio = bio;
    this.address = address;
    this.phone = phone;
  }

  lookupContactInfo() {
    return `${this.name}, Phone: ${this.phone}, Address: ${this.address}`;
    // Harindra, Phone: 1234567890, Address: 123, 123, Address: 123 road 2, Hyderabad
  }
}

const Student2 = new StudentFullData(
  "John Doe",
  20,
  10,
  "I love playing cricket",
  "123 road 2, Hyderabad",
  1234567890
);

// A company called Amazon
//  Bluprint of Products
// const _Product = {
//   title: "Product Title",
//   price: 0,
//   description: "Product Description",
//   stock_qty: 100,
// }
// const _Ebooks = {
//   title: "Ebook Title",
//   price: 0,
//   description: "Ebook Description",
//   downloadUrl: "https://www.amazon.com/ebook",
// };

class BaseProduct {
  constructor(title, price, description, stock_qty) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.stock_qty = stock_qty;
  }
}

class Ebooks extends BaseProduct {
  constructor(title, price, description, stock_qty, downloadUrl) {
    super(title, price, description, stock_qty);
    this.downloadUrl = downloadUrl;
  }
}

class SmartPhones extends BaseProduct {
  constructor(title, price, description, stock_qty, camera, ram) {
    super(title, price, description, stock_qty);
    this.camera = camera;
    this.ram = ram;
  }
}

class Computers extends SmartPhones {
  constructor(title, price, description, stock_qty, camera, ram, os, brand) {
    super(title, price, description, stock_qty, camera, ram);
    this.os = os;
    this.brand = brand;
  }
}

// import Computer  from './Computer';

const MyComputer = new Computers();
const AsusComputer = new Computers();

// Arraow functions
// add, ADD

function add(n1, n2) {
  return n1 + n2;
}

const ADD = (n1, n2) => {
  return n1 + n2;
};

const ADD2 = (n1, n2) => {
  return n1 + n2;
};

function invokeAdd() {
  console.log(add(1, 2));
  console.log(ADD2(1, 2));
}

// Example for Desctructuring

const STUDENT = {
  name: "John",
  age: 20,
  rollno: 1,
  grade: 0,
};

const NAME = STUDENT.name;
const AGE = STUDENT.age;

const { grade: StudentGrade, age } = STUDENT;

// Array destructuring;

const Marks = [10, 9, 8.5, 10, 9.5];
const [Sub1, Sub2] = Marks; //  10, 9

const Marks2 = [21, 7.5, 8.5, 11, 9.5];

const marks3 = [];
for (var i = 0; i < Marks.length; i++) {
  marks3.push(Marks[i]);
}

for (var i = 0; i < Marks2.length; i++) {
  marks3.push(Marks2[i]);
}

const marks4 = [...Marks, ...Marks2];
let obj1 = { name: "John", age: 20 };
const obj2 = { rollno: 1, grade: 0 };

const obj3 = { ...obj1, ...obj2 };

obj1 = { ...obj1, ...obj2 };

const myAge = 20;

if (myAge > 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

console.log(myAge > 18 ? "You are an adult" : "You are a minor");

function checkIamAmMajor() {
  return myAge > 18 ? "You are an adult" : "You are a minor";
}
