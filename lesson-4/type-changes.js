// console.log(Boolean(-3)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean("test")); // true
// console.log(Boolean("")); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean({})); // true
// console.log(Boolean([])); // true

// let str = Number("test");
// console.log(str); // NaN, помилка перетворення

// console.log(Number("238s")); // NaN (помилка на місці символу "s")
// console.log(Number("   32   ")); // 32 - Пробіли на початку та з кінця видаляються
// console.log(Number(true));  // 1
// console.log(Number(false)); // 0

// let value = true;
// console.log((typeof value) === 'boolean'); // boolean
// console.log(value); // true

// value = String(value); // тепер value - це рядок "true"
// console.log(typeof value); // string
// console.log(value); // "true"

// let testNumber = 5;
// testNumber = String(testNumber);
// console.log(typeof testNumber); // string


//----

// console.log(!!true); // true
// console.log(!!0); // false
// console.log(!!''); // false


// Boolean(0) === false
// console.log(Boolean(0)); // false
// console.log(!0) // true, оскільки !0 перетворює 0 в false, а потім заперечує його, отримуючи true
// console.log(!!0) // false

// const variableVallue = '';
// const otherVar = 1
// if(variableVallue || otherVar) {
//    console.log('Some undefined code handling')
// } else {
//     // other handling
// }

// console.log(!!variableVallue === false);

// ---
console.log(5 + '10'); // "510" (рядок)
console.log('15' * 5); // 10 (число)