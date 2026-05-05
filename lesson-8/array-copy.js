

// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = originalArray.slice();
// console.log(originalArray); // [1, 2, 3, 4, 5]
// console.log(copiedArray); // [1, 2, 3, 4, 5]

// copiedArray.push(6);
// console.log(originalArray); // [1, 2, 3, 4, 5]
// console.log(copiedArray); // [1, 2, 3, 4, 5, 6]

// const nonPrimitiveArray = [1, 2, ['q', 'w', 'e', [1,2,3]], 4, 5];
// const copiedNonPrimitiveArray = [...nonPrimitiveArray]
// const deepCopiedArray = structuredClone(copiedNonPrimitiveArray);
// const deepCopiedArray2 = JSON.parse(JSON.stringify(copiedNonPrimitiveArray));
// copiedNonPrimitiveArray[2][1] = 'same array';
// copiedNonPrimitiveArray[1] = 'same number';
// console.log('nonPrimitiveArray', nonPrimitiveArray);
// console.log('\n')
// console.log('copiedNonPrimitiveArray', copiedNonPrimitiveArray);
// console.log('\n')
// console.log('deepCopiedArray',  deepCopiedArray);
// console.log('\n')
// console.log('deepCopiedArray2', deepCopiedArray2);

// const obj = {
//     name: 'Alice',
//     age: 30,
//     nestedObj: {
//         key: 'value'
//     }
// }