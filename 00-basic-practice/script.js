//// Callback ////
const display = document.getElementById("demo");
// function myFirst() {
//   console.log("Hello");
// }

// function mySecond() {
//   console.log("Goodbye");
// }

// myFirst();
// mySecond();

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// let result = myCalculator(5, 5);
// console.log(result);

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   console.log(sum);
// }

// myCalculator(5, 5);

// function myCalculator(num1, num2, myDisplayer) {
//   let sum = num1 + num2;
//   myDisplayer(sum);
// }

// myCalculator(5, 5, console.log);

////////////////////////////////////////////////
// const myNumbers = [4, 1, -20, -7, 5, 9, -6];
// const posNum = removeNeg(myNumbers, (x) => x >= 0);

// function removeNeg(numbers, cb) {
//   const myArray = [];
//   for (const x of numbers) {
//     if (cb(x)) {
//       myArray.push(x);
//     }
//   }
//   return myArray;
// }

// console.log(posNum);

// setTimeout(() => console.log("Hello"), 3000);

// setTimeout(displayOut, 3000);

// function myFunc() {
//   console.log("Hello");
// }

// function displayOut() {
//   display.innerHTML = "Hello";
// }

// setInterval(myFunc, 1000);

// function myFunc() {
//   let d = new Date();
//   display.innerHTML =
//     d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// }

//// Promise ////
// let myPromise = new Promise(function (myResolve, myReject) {
//   // "Producing Code" (May take some time)

//   myResolve(); // when successful
//   myReject(); // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function (value) {
//     /* code if successful */
//   },
//   function (error) {
//     /* code if some error */
//   }
// );

// let myPromise = new Promise(function (myResolve, myReject) {
//   let x = 2;

//   // The producing code (this may take some time)

//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   function (value) {
//     console.log(value);
//   },
//   function (error) {
//     console.log(error);
//   }
// );
// setTimeout(function () {
//   myFunction("Hello");
// }, 3000);

// function myFunction(value) {
//   document.getElementById("demo").innerHTML = value;
// }

// const myPromise = new Promise(function (myResolve, myReject) {
//   setTimeout(function () {
//     myResolve("Hello");
//   }, 3000);
// });

// myPromise.then(function (value) {
//   display.innerHTML = value;
// });

/// waiting for a file
function getFile(myCallBack) {
  let req = new XMLHttpRequest();
  req.open("GET", "mycar.html");
  req.onload = function () {
    if (req.status == 404) {
      myCallBack(req.responseText);
    } else {
      myCallBack("error: ", req.status);
    }
  };
  req.send();
}

getFile((value) => (display.innerHTML = value));
