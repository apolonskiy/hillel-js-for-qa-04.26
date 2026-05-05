





// const isOdd = (n) => {
//   return n % 2 !== 0;
// }

// // callback = cb shortly
// const printMsg = (cb, num) => {
//     let isNumOdd;
//     if(cb.name === 'isOdd') {
//         isNumOdd = cb(num);
//     } else if(cb.name === 'isEven') {
//         isNumOdd = !cb(num);
//     }
//   console.log(`The number ${num} is an odd number: ${isNumOdd}.`)
// }

// // Pass in isOdd as the callback function
// printMsg(isOdd, 4); 

// //-------

// function fetchData(url, callbackArg) {
//   fetch(url)
//     .then((res) => {
//         return res.json()
//     })
//     .then(callbackArg) // .then(data => console.log(data))
//     .catch(error => console.log(error));
// }

// const callbackFn = (data) =>{
//   console.log(data);
// }

// fetchData('https://jsonplaceholder.typicode.com/todos/1', callbackFn);

// // Array methods

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter((num, ind) => {
//     if(ind > 3) return false;
//     return num % 2 === 0;
// });

// console.log(evenNumbers); // [2, 4]


// -- IIFE and anonymous functions

// const add = function(x, y) {
//     return x + y;
// };

// add()
// console.log(add.name)

// (function(arg1) {
//     const message = "Це локальна змінна";
//     console.log(message, arg1);
// })('Some text');