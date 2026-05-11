




// const person = {
//   name: {
//     first: "John",
//     last: "Doe",
//     "!@#$%": 123,
//     'full name': function() {
//       return this.first + ' ' + this.last;
//     }
//   },
//   age: 30
// };

// // console.log(person.name.first); // Output: John
// // console.log(person['name']['last'])
// // console.log(person['age']);
// // console.log(person.name['!@#$%']);
// // console.log(person.name["full name"]());


// // console.log(person.age); // 30
// // person.age = 31;
// // console.log(person.age); //
// person.country = "USA";
// person.name.whatever = 'whatever ABC'
// delete person.name["full name"]
// // console.log(person); // USA
// //----
// delete person.age;
// console.log(person); // age видалено

// ---


const age = 25;
const name = "John"
const randomNumber = Math.round(Math.random() * 100000);

const person = {
    name,       //<<<<<--- name: name,
    age,        //<<<<<--- age: age,
    [randomNumber]: "Random Value", // Динамічна властивість
    somePersonGreeting: function(someArg) {
        return `Hello, my name is ${this.name} and I am ${this.age} years old., and this is someArg: ${someArg}`;
    },
    greetingAlternative(argument) {
        return `Hello, my name is ${this.name} and I am ${this.age} years old., and this is argument: ${argument}`;
    }
};
console.log(person.age); // 25
console.log(person.name); // John
console.log(person[randomNumber]); // "Random Value"
console.log(person.somePersonGreeting("This is some argument")); // Виклик методу з аргументом
console.log(person.greetingAlternative("Another argument")); // Виклик альтернативного методу з аргументом
