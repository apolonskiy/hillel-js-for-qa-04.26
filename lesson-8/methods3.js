
//--

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index, array) => {
//     array[index] = number * 2; // Modifying the original array
// //   console.log(number * 2);
// //   console.log(index);
// //   console.log(array);
// });
// console.log(numbers); // [2, 4, 6, 8, 10]

// --

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const evenNumbers = numbers.filter((elem, ind) => elem % 2 === 0 && ind > 2);
// console.log(evenNumbers); // [4, 6, 8]

// --
// console.log('2' % 2)
// const numbers = [1, '2', 3, 2, 5];
// const firstEvenNumber = numbers.find((number) => number % 2 === 0);
// console.log(typeof firstEvenNumber); // string
// console.log( firstEvenNumber); // '2'

// --

// const numbers = [1, 3, 3, 4, 5, 6];
// const firstEvenNumberIndex = numbers.findIndex((number) => number % 2 === 0);
// console.log(firstEvenNumberIndex); // 3

//--

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((number, ind) => {
//     if(ind > 2) return number * 3;
//     return number * 2;
// });
// console.log(doubledNumbers)


// --
// const nestedArray = [[1, 2, ['q', 'w']], [3, 4], [5, 6]];
// const flatArray = nestedArray.flat(3); // [1, 2, 3, 4, 5, 6]
// console.log(flatArray);

//---

const numbers = [1, 2, 3];
                                                // [[1*2, 1*3, 1*4], [2*2, 2*3, 2*4], [3*2, 3*3, 3*4]].map()
const doubledAndFlattened = numbers.flatMap((number) => [number * 2, number * 3, number * 4]); // [2, 3, 4, 4, 6, 8, 6, 9, 12]
console.log(doubledAndFlattened)