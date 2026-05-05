




// function outer() {
//     let outerVar = 10;

//     function inner() {
//         console.log(outerVar);
//     }

//     return function() {
//         console.log(outerVar);
//     }
// }

// let closureFn = outer();
// closureFn(); // Виведе 10

// function multiplier(factor) {
//     return function(x) {
//         return x * factor;
//     };
// }

// let double = multiplier(2);
// console.log(double(5)); // Виведе 10

// const simplMultiplier = (factor, x) => x * factor;

// const triple = simplMultiplier(3);
// console.log(triple(5)); // Виведе 15



/// ------

// const add = a => {
// 	return b => {
// 		return a + b;
// 	};
// };
// console.log(add(3)(4));
// // 7

// const addOffset = add(getOffsetNumber());
// console.log(addOffset(4));

// const range = (a, b) => a > b ? [] : [a, ...range(a+1, b)];
// // iteration one -> [1, ...[2], ...[3], ...[4], ...[5], ...[]] -> [1, 2, 3, 4, 5]
// console.log(range(1, 5)); // [1, 2, 3, 4, 5]
// const arr = new Array(5).fill(0).map((_, i) => i + 1);
// console.log(arr); // [1, 2, 3, 4, 5]
