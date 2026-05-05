



// const str = 'qqq';

// str.length;
// str.toUpperCase()

// const obj = {
//     name: 'John',
// }
// obj.name

// console.log(this);

// const person = {
//   name: 'Alice',
//   greet: function() {
//     console.log(this)
//     console.log(`Hello, ${this.name}!`);
//   }
// };

// console.log(person)


// person.greet(); // Виведе "Hello, Alice!"

// function Person(name) {
//   this.name = name;
//   this.greet = function() {
//     console.log(this);
//     console.log(`Hello, ${this.name}!`);
//   };
// }

// const anna = new Person('Ann');
// anna.greet(); // Виведе "Hello, Ann!"

// const nick = new Person('Nick');
// nick.greet(); // Виведе "Hello, Nick!"
// console.log(this)

const obj = {
  name: 'Alice',
  sayHello: () => { // DONT DO THIS!!!
    console.log(this)
    console.log(`Hello, ${this.name}!`);
  },
  greetWithWait: function() {
    console.log(this);
    setTimeout(() => {
      console.log(this);
      console.log(`Hello, ${this.name}!`);
    }, 1000);
  },
  newWayOfMethods(arg1, arg2) {
    console.log(this);
    console.log(`Arguments: ${arg1}, ${arg2}`);
  }
};

obj.newWayOfMethods('qwe', 123); // Виведе об'єкт obj

// obj.sayHello(); // Виведе "Hello, undefined!"
// obj.greetWithWait()


// ------

// function greet() {
//   console.log(`Hello, ${this.name}!`);
// }

// const person = { name: 'Alice' };
// greet.call(person); // Виведе: Hello, Alice!