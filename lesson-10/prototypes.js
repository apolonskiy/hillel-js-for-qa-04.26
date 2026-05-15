

// const num = 1;
// console.log(num.toString());
// Number.prototype.toString = function() {
//     return 'Overridden toString method';
// }

// console.log(num.toString()); // Виведе 'Overridden toString method'

// const person = {
//   name: 'John',
//   age: 42
// };

// console.log(person.hasOwnProperty('age')); // true
// console.log(person.hasOwnProperty('toString')); // false


const user = {
	login() {
	  return true;
  }
}

const person = {
  name: 'John',
  age: 42,
  __proto__: user
};

for (const item in person) {
    console.log(item);
  if (person.hasOwnProperty(item)) {
    console.log('this is a property of the person - ', `${item} : `, person[item]);
  } else {
    console.log('this is the prototype property - ', `${item} :`, person[item]);
  }
}