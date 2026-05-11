


// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };

// for (let key in person) {
//   console.log(key + ': ' + person[key]);
// }

// const keys = Object.keys(person);
// for(const key of keys){
//     console.log(key + ': ' + person[key]);
// }
// console.log(keys);


// const values = Object.values(person);
// for(const value of values){
//     console.log(value);
// }
// console.log(values);

// const entries = Object.entries(person);
// console.log(entries);
// [["name", "John"], ["age", 30], ["city", "New York"]]

// ----

// const animal = {
//     legs: 4
// }
// const dog = Object.create(animal);
// dog.breed = "Labrador";
// console.log(dog);
// console.log(dog.legs); // 4, успадковано від animal

// // Повертає true для всіх властивостей
// console.log("breed" in dog);// true
// console.log("legs" in dog);// true

// // Повертає true тільки для власних властивостей
// console.log(dog.hasOwnProperty("breed"));// true
// console.log(dog.hasOwnProperty("legs"));// false

// for(let value of Object.values(dog)){
//     console.log(value); // Виведе "Labrador"
// }

/// ----


const people = [
  { name: "John", age: 30, innerOjb: { innerKey: "innerValue" } },
  { name: "Jane", age: 25, innerOjb: { innerKey: "innerValue" } },
  { name: "Mike", age: 40, innerOjb: { innerKey: "innerValue" } }
];

people.push({ name: "Anna", age: 28, innerOjb: { innerKey: "innerValue" } });
// console.log(people[0].innerOjb.innerKey); // Виведе "John"
// console.log(people[1].age); // Виведе 25
// console.log(people[2].name); // Виведе "Mike"

const mappedArrayNames = people.map(person => person.name);
console.log(mappedArrayNames); // Виведе ["John", "Jane", "Mike", "Anna"]

const mappedMutatedArray = people.map(person => ({
    name: `Dear ${person.name}`,
    age: person.age + 1, // Збільшуємо вік на 1
    innerOjb: person.innerOjb // Залишаємо внутрішній об'єкт без змін
}))

console.log(mappedMutatedArray);

const thirtyyearsOrOlder = people.filter(person => person.age >= 30);
console.log(thirtyyearsOrOlder); // Виведе масив з об'єктами John та Mike

