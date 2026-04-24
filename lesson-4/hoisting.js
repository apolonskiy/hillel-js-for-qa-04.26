
// var hoisting in block scope
// if(1 < 3) {
//     var variable1 = 1;
//     let variable2 = 2;
//     const variable3 = 3;
// }

// console.log(variable1); // 1
// console.log(variable2); // ReferenceError: variable2 is not defined
// console.log(variable3); // ReferenceError: variable3 is not defined

// -----

// var hoisting in function scope

// function test() {
//     var variable1 = 1;
//     let variable2 = 2;
//     const variable3 = 3;
// }

// test();

// console.log(variable1); // ReferenceError: variable1 is not defined
// console.log(variable2); // ReferenceError: variable2 is not defined
// console.log(variable3); // ReferenceError: variable3 is not defined

// ----
//Function hoisting

// hoisting for function works only for function declarations, not for function expressions or arrow functions
// test()

// function test() {
//     console.log('I am a function');
// }

// these 2 types of functions do not hae hositing

// const test2 = function() {
//     console.log('I am a function expression');
// }
// test2()

// const test3 = () => {
//     console.log('I am an arrow function');
// }