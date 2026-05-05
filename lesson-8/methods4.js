

// --
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months); //  ["Dec", "Feb", "Jan", "March"]

// months.sort((a, b) => a.localeCompare(b));
// console.log(months); //  ["Dec", "Feb", "Jan", "March"]

// console.log('q'.localeCompare('a')); // 1
// months.sort((a, b) => b.localeCompare(a));
// console.log(months);

const data = [
  { lastLoginAt: 1637299200, name: 'Alice' },
  { lastLoginAt: 1638387200, name: 'Charlie' },
  { lastLoginAt: 1638405600, name: 'Bob' },
];

// data.sort((a, b) => {
//     if (a.lastLoginAt < b.lastLoginAt) {
//         return 10;
//     }
//     if (a.lastLoginAt > b.lastLoginAt) {
//         return -100;
//     }
//     return 0;
// });
// console.log(data)

// data.sort((a, b) => a.lastLoginAt - b.lastLoginAt);
// console.log(data)
// data.sort((a, b) => b.name.localeCompare(a.name));
// console.log(data)

// --

// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse(); // [5, 4, 3, 2, 1]
// console.log(numbers)

//--

// const numbers = [1, 2, 3, 4, 5];
// const factorial = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
// console.log(factorial); // 120

// --
// const numbers = [1, 2, 23, 4, 5];
// const hasThree = numbers.includes(3); // true
// console.log(hasThree); // true

//--
// const numbers = [1, 3, 3, 5, 5];
// const hasEvenNumber = numbers.some((number) => number % 2 === 0); // true
// console.log(hasEvenNumber); // true

// const numbers = [2, 4, 6, 7, 10];
// const allEvenNumbers = numbers.every((number) => number % 2 === 0); // false
// console.log(allEvenNumbers); // false

//---
