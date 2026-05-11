

// const person = {
//   name: "John",
//   age: 30,
//   gender: "male",
//     parents: {
//         mother:{
//             name: "Jane",
//             age: 55
//         },
//         father: {
//             name: "Jack",
//             age: 60
//         }
//     }

// };

// const name = 'Marry';
// const { name: personName, age, gender = "unknown", parents: {mother: {name: motherName}} } = person;

// person.parents.mother.name = "Changed Mother Name";

// console.log(personName); // "John"
// console.log(age); // 30
// console.log(gender); // "male"
// console.log(motherName)
// console.log(person.parents.mother.name)


// ---

const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 }
];

// for (const { name, age } of people) {
//   console.log(`${name} is ${age} years old`);
// }

// const mappedArray = people.map(({name, age}, index, array) => {
//     return {
//         name: `Mapped ${name}`,
//         age,
//         index,
//         arrayLength: array.length
//     } 
// });
// console.log(mappedArray);
// console.log(people);


const funcDesctruct = ({ name, age }) => {
    console.log(`Name: ${name}, Age: ${age}`);
}
funcDesctruct(people[0])