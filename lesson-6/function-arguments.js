

// const registerName = (name, lastName) => {
//     if(typeof name !== 'string' ) {
//         throw new Error('Name must be a string, mandatory!');
//     }
//     return lastName ? `${name} ${lastName}` : name;
//     // return `${name} ${lastName}`;
// }

// console.log(registerName('John'))
// console.log(registerName('John', 'Doe'))

// DEFAULT ARGUMENTS
// const registerName = (name, lastName = 'Smith') => {
//     if(typeof name !== 'string' ) {
//         throw new Error('Name must be a string, mandatory!');
//     }
//     return lastName ? `${name} ${lastName}` : name;
//     // return `${name} ${lastName}`;
// }

// console.log(registerName('John'))
// console.log(registerName('John', 'Doe'))

// do not add default arguments in the middle of args list
// const returnAge = (age, shouldLog = false, name = 'Unknown') => {
//     if(shouldLog) {
//         console.log(`Age is: ${age}`);
//     }
//     return `${age} and name is ${name}`;
// }

// console.log(returnAge(30, true, 'John')) // logs "Age is: 30" and returns "30 and name is John"
// console.log(returnAge(25, false, 'Doe')) // returns "25 and name is Doe" without logging anything


// REST OPERATOR (arguments)
// const restOperatorFunc = function(...restArgs) {
//     console.log('restArgs:', restArgs);
// }

// const arr = ['val1', 'val2', 'val3', 'val4'];   

// restOperatorFunc(...arr); // restOperatorFunc('val1', 'val2', 'val3', 'val4)
// restOperatorFunc('val1', 'val2', 'val3', 'val4')
// restOperatorFunc(1, 'hello', true, { name: 'John' }, [1, 2, 3]);

// const arr1 = ["a", "b", "c"];
// console.log(...arr1); // a b c
// console.log('a', 'b', 'c');


// const sumCounter = (a, b, ...rest) => {
//     const sum = a + b;
//     console.log('rest:', rest);
//     return sum;
// }

// console.log(sumCounter(1, 2)); // 3
// console.log(sumCounter(1, 2, 4, 5, 6, 7)); // 3 


// Default arguments in functions

// function sum(a,b,c) {
// 	let total = 0;

//     // console.log('arguments:', arguments);
// 	for (let i = 0; i < arguments.length; i++) {
// 		total += arguments[i];
// 	}

// 	return total;
// }

// console.log(sum(2, 4, 6)); // виведе 12