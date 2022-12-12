// function sayHello() {
//   return "Hello " + this.name;
// }

// const obj = { name: "Shanki" };

// console.log(sayHello.call(obj));

// const bikeDetails = {
//   displayDetails: function (registrationNum, brandName) {
//     return `${this.name}, bike details: ${registrationNum}, ${brandName}.`;
//   },
// };

// const person1 = { name: "Shanki" };

// const ex1 = bikeDetails.displayDetails.call(person1, "TS0122", "Bullet");
// const ex2 = bikeDetails.displayDetails.apply(person1, ["TS0122", "Bullet"]);
// const ex3 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");

// console.log(ex1);
// console.log(ex2);
// console.log(ex3());

// function memoAdd256() {
//   const cache = {};

//   return function (num) {
//     if (num in cache) {
//       console.log("Cached value");
//       return cache[num];
//     }
//     cache[num] = num + 256;
//     return cache[num];
//   };
// }

// const memoFunc = memoAdd256();
// memoFunc(20);
// memoFunc(20);

// function func1() {
//   setTimeout(() => {
//     console.log(x);
//     console.log(y);
//   }, 3000);
//   var x = 2;
//   let y = 12;
// }
// func1();

// function func2() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 2000);
//   }
// }
// func2();

// (function () {
//   setTimeout(() => console.log(1), 2000);
//   console.log(2);
//   setTimeout(() => console.log(3), 0);
//   console.log(4);
// })();

// let x = {},
//   y = { name: "Ronny" },
//   z = { name: "John" };
// x[y] = { name: "Vivek" };
// x[z] = { name: "Akki" };
// console.log(x[y]);

// function runFunc() {
//   console.log("1" + 1);
//   console.log("A" - 1);
//   console.log(2 + "-2" + "2");
//   console.log("Hello" - "World" + 78);
//   console.log("Hello" + "78");
// }
// runFunc();

let hero = {
  powerLevel: 99,
  getPower: function () {
    return this.powerLevel;
  },
};
let getPower = hero.getPower;
let hero2 = { powerLevel: 42 };
console.log(getPower());
console.log(getPower.apply(hero2));
