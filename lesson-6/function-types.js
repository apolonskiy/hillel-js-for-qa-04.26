

// DECLARATION

// console.log(add(10, 5)); // 15

// function add(a, b) {
//     if(typeof a !== 'number' || typeof b !== 'number') {
//         // throw new Error('Both arguments must be numbers');
//         return NaN;
//     }
//     // const sum = a + b
//     // return sum;
//     console.log('functin body called')
//     return a > 5 ?  a + b : a - b;
// }

// const res = add(2, 5)
// console.log(res); // -3

// EXPRESSION

// console.log(randomNumber()); // does not work as declaration, because it is not hoisted

// const randomNumber = function() {
//         const num = Math.round(Math.random() * 100);
//         return num;
// }

// console.log(randomNumber()); // random number between 0 and 100

// ARROW FUNCTION

// console.log(multiply(3, 4)); // does not work as declaration, because it is not hoisted

// const multiplyWithBody = (a, b) => {
//     const result = a * b;
//     return result;
// }

// console.log(multiplyWithBody(3, 4)); // 12

// const multiply = (a, b) => a * b;
// console.log(multiply(3, 4)); // 12