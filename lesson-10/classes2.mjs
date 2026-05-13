

// Створення об'єкта "прототипу"
// const animalPrototype = {  
//   speak() {
//     console.log(`${this.name} says ${this.sound}`);
//   }
// };

// // Створення об'єкта, який успадковує прототип
// // ->> dog ->> animalPrototype ->>  Object
// const dog = {
//   name: "Dog",
//   sound: "Woof",
// //   __proto__: animalPrototype
//   speak() {
//     console.log(`Our pretty ${this.name} woofs ${this.sound}`);
//   }
// };
// console.log(Object.getPrototypeOf(dog))
// Object.setPrototypeOf(dog, animalPrototype); // Встановлення прототипу для об'єкта dog
// console.log(Object.getPrototypeOf(dog))
// // dog.__proto__ = animalPrototype;
// console.log(dog.hasOwnProperty('name'))
// console.log(animalPrototype)
// console.log(dog); // Виведе об'єкт dog з властивостями name і sound, а також успадкованим методом speak
// // Виклик методу від успадкованого прототипу
// dog.speak(); // Dog says Woof
// // dog.speakNotExist() // TypeError: dog.speakNotExist is not a function, оскільки такого методу немає ні в об'єкті dog, ні в його прототипі animalPrototype



import { Human } from './classes1.mjs';

class School {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Child extends Human {
    constructor({ name, age, gender, countryOfOrigin, schoolNumber, subjectList, parentNames }) {
        super(name, age, gender, countryOfOrigin);
        this.schoolNumber = schoolNumber;
        this.subjectList = subjectList;
        this.parentNames = parentNames;
    }

    schoolData = new School(`School ${this.schoolNumber}`, '123 Main St');

    obj = {
        a: 'a'
    }

    // describeYourself() {
    //     console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I am ${this._gender}. 
    //         I go to school number ${this.schoolNumber} and I study the following subjects: ${this.subjectList.join(', ')}.
    //         My parents are ${this.parentNames.join(' and ')}.`);
    // }
}

const child1 = new Child({name: 'Marry', age: 5, gender: 'female', 
    countryOfOrigin: 'Ukraine', schoolNumber: 10, 
    subjectList: ['Math', 'Literature'], parentNames: ['Andrii', 'Olga']});

console.log(child1);
child1.schoolData = new School('Changed School Name', '456 Another St');
console.log(child1);

// console.log(Object.getOwnPropertyNames(child1));
// child1.describeYourself();