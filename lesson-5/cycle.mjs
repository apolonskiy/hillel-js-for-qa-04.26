// for (let i = 1; i < 10; i *= 2) {
//   console.log(i)
// }

import { randomNumber } from "./export.mjs";

// for (let i = 1; i < 10; i = i + 1 ) { // i += 1 === i++
//   console.log(i)
// }

// let i = 0;
// for (; i < 10; ) {
//   console.log(i)
//   i++;
// }

// const str = 'this is very long phrase';
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// const arr  = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// for (let i=0 ; i < 10; i ++) {
//     // if (i % 2 === 0) {
//     //     console.log(i);
//     // }
//      if (!(i % 2)) {
//         console.log(i);
//     }
// }

// for (let i=0 ; i < 10; i++) {
//      if (i === 2 || i === 5) {
//         continue; // пропускає поточну ітерацію і переходить до наступної
//     } else if (i === 7) {
//         break; // виходить з циклу повністю
//     }
//     console.log(i);
// }

// ----- WHILE

// let count = 0;
// let randomNum = randomNumber() 
// console.log('randomNum>>', randomNum);
// let isElementVisible = randomNum > 95; // випадкове логічне значення
// while (count < 10 && !isElementVisible) {
//     // pseudo sleep(2000)
//     console.log('count>>', count); // Виведе числа 0, 1, 2
//     randomNum = randomNumber() 
//     isElementVisible = randomNum > 95; // випадкове логічне значення
//     console.log('randomNum>>', randomNum)
//     count++;
// }

// do-while
// let num = 2;

// do {
//     console.log(num); // Виведе число 7
//     num++;
// } while (num < 5);


//multi-layer cycles

// const arr = [['value1', 'value2'], ['value3', 'value4'], ['value5', 'value6']];

// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= 3; j++) {
// 		console.log(' '.repeat(i), i, j);
// 	}
// }

// let output = '';

// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= 9; j++) {
// 		output += ' ' + i * j;
// 		if (i * j < 10) {
// 			output += ' ';
// 		}
// 	}
//     console.log(output)
// 	output = '';
// }