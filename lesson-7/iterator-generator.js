


// function iter (array) {
//   let nextIndex = 0
//   return {
//     next: function () {
//       if (nextIndex < array.length) {
//         return {
//           value: array[nextIndex++],
//           done: false
//         }
//       }
//       return {
//         value: undefined,
//         done: true
//       }
//     }
//   }
// }

// const array = ['banana', 'apple', 'orange', 'kiwi', 'cherry']
// const arrayIterator = iter(array);
// console.log(arrayIterator.next()); // { value: 'banana', done: false }
// console.log(arrayIterator.next()); // { value: 'apple', done: false }
// console.log(arrayIterator.next()); // { value: 'orange', done: false }
// console.log(arrayIterator.next()); // { value: 'kiwi', done: false }
// console.log(arrayIterator.next()); // { value: 'cherry', done: false }
// console.log(arrayIterator.next()); // { value: undefined, done: true }

// const array = ['banana', 'apple', 'orange', 'kiwi', 'cherry']
// const arrayIterator = array[Symbol.iterator]()
// console.log(arrayIterator.next()); // { value: 'banana', done: false }
// console.log(arrayIterator.next()); // { value: 'apple', done: false }
// console.log(arrayIterator.next()); // { value: 'orange', done: false }
// console.log(arrayIterator.next()); // { value: 'kiwi', done: false }
// console.log(arrayIterator.next()); // { value: 'cherry', done: false }
// console.log(arrayIterator.next()); // { value: undefined, done: true }


function* myFnGen () {
  yield 'qwe'
  yield true
  yield {}
}

const generator = myFnGen()

console.log(generator.next()) // { value: 1, done: false }
console.log(generator.next()) // { value: 2, done: false }
console.log(generator.next()) // { value: 3, done: false }
console.log(generator.next()) // { value: undefined, done: true }