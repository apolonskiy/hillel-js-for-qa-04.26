
// // cycles for..of

// const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]); // Виведе всі числа з масиву
// }

// console.log('\n')
// for (const element of numbers) {
//     console.log(element); // Виведе всі числа з масиву
// }


// assignment to variable of primitive vs non-primitive types

// let num1 = 5;
// let num2 = num1;

// console.log(num1); // 5
// console.log(num2); // 5

// num1 = 10;
// console.log(num1); // 10
// console.log(num2); // 5

const arr1 = [1, 2, 3];
const arr2 = arr1;

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]

arr1.push(4, 5);
console.log(arr1); // [1, 2, 3, 4, 5]
console.log(arr2); // [1, 2, 3, 4, 5]