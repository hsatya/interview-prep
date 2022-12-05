///// Arrays /////
// const arr = [1, 2, 3, 4, 5];

// const arr2 = arr.map((ele) => ele * 2);
// console.log(arr2);

// const words = ["react", "script", "interview", "style", "javascript"];
// const wordsGt6 = words.filter((w) => w.length > 6);
// console.log(wordsGt6);

// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// const arrEv2 = arr1.map((ele) => (ele % 2 === 0 ? ele * 2 : ele));
// console.log(arrEv2);

// const arr1 = [1, 2, 3, 4, 5, 6, 7];
// const arrEv21 = arr1.forEach((ele) => (ele % 2 === 0 ? ele * 2 : ele));
// console.log(arrEv21);
// console.log(arr1);

///// Functions /////
// const greet = () => {
//   const prefix = "Mr";
//   return (name) => console.log(`${prefix}. ${name}, welcome.`);
// };

// greet()("Neo");

// var a = 5;

// function adder() {
//   var c = 8;
//   let b = 7;
//   console.log(a + b + c);
// }

// {
//   var x = 12;
//   let y = 17;
//   const z = 21;
// }

// adder();
// console.log(z);

// const greet = () => {
//   const prefix = "Mr";
//   return (name) => {
//     console.log(`${prefix}. ${name}, welcome.`);
//   };
// };

// function x() {
//   const a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// const z = x();
// console.log(z);
// z();

//// Curring
// let add = function (x) {
//   return function (y) {
//     console.log(x + y);
//   };
// };

// let addByTwo = add(2);
// addByTwo(3);
// add(2)(3);

// function Counter() {
//   var count = 0;
//   this.incrementCount = function () {
//     count++;
//     console.log(count);
//   };
// }

// console.log(count);

// var adder = new Counter();
// adder.incrementCount();
// adder.incrementCount();
// for (let i = 0; i < 10; ++i) adder.incrementCount();

//// Hoisting ////
// function consoleNum() {
//   console.log(num);
//   let num = 10;
// }

// consoleNum(); // undefined

//// this ////
// console.log(this);

// function myFunc() {
//   console.log(this);
// }

// const obj = {
//   bool: true,
//   myFunc: myFunc,
// };

// obj.myFunc();

// myFunc();

// const student1 = {
//   name: "Randall",
//   displayName1: function displayName() {
//     console.log(this.name);
//   },
// };

// const student2 = {
//   name: "Raj",
//   displayName2: function displayName() {
//     console.log(this.name);
//   },
// };

// const student2 = {
//   name: "Raj",
// };

// student1.displayName1();
// student1.displayName1.call(student2);

// const myData = {
//   name: "Rajat",
//   city: "Delhi",
//   displayStay: function () {
//     console.log(this.name, "stays in", this.city);
//   },
// };

// myData.displayStay();

// const yourData = {
//   name: "Harshit",
//   city: "Indore",
// };

// myData.displayStay.call(yourData);

//// Prototypes and Prototypal Inheritance ////
// let arr = ["Rajat", "Raj"];
// console.log(arr.__proto__.forEach);
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);

// let obj = {
//   name: "Harshit",
//   city: "Indore",
//   getIntro: function () {
//     console.log(`${this.name}, ${this.city}`);
//   },
// };

// let obj2 = {
//   name: "Aaditya",
// };

// obj2.__proto__ = obj;

// obj2.getIntro();

///// Call Stack ////

// function foo() {
//   throw new Error("Oops!");
// }

// function bar() {
//   foo();
// }

// function baz() {
//   bar();
// }

// baz();

// function foo() {
//   return foo();
// }

// foo();

// console.log("Hi");
// setTimeout(function () {
//   console.log("There");
// }, 5000);
// console.log("JS");
/// synchronous
[1, 2, 3, 4, 5].forEach(function (i) {
  console.log("processing sync");
  delay();
});
/// asynchronous
function asyncForeach(array, cb) {
  array.forEach(function () {
    setTimeout(cb, 0);
  });
}

asyncForeach([1, 2, 3, 4, 5], function (i) {
  console.log("processing async", i);
  delay();
});
