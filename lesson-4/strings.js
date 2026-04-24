// indexes

// const arr = ['val1', 'val2', 'val3'];
// // console.log(arr[0]); // val1
// // console.log(arr.length)
// arr[1]= 'new value';
// console.log(arr); // new value

// let text = "I'm a string!";
// console.log(text[4]); // I
// console.log(text.length) // 14
// console.log(text[text.length - 1]) // !

// text[1]=' a';
// console.log(text) // I'm a string! (рядки в JavaScript є незмінними, тому зміна символу не впливає на рядок)

// text = 'new value string'
// console.log(text) // new value string

// concatenation

// old way
// const str1 = 'Hello, ';
// const str2 = 'World!';
// const result = str1 + str2;
// console.log(result); // Hello, World!

// //new way - template literals
// const name = 'Andrii';
// const greeting = `Hello, ${name}! Your age should be ${(Math.random() * 100).toFixed(0)} years old.`;
// console.log(greeting); // Hello, Andrii!

// methods
// const text = "JavaScript!";
// console.log(text.length); // Виведе: 10
// console.log(text.toUpperCase()); // Виведе: "JAVASCRIPT"
// console.log(text.charAt(3)); // Виведе: "a" == text[3]
// console.log(text.indexOf("Script")); // Виведе: 4
// console.log(text.substring(4, 8)); // Виведе: "Script"
// console.log('\n')
// console.log(text.endsWith("Script")); // Виведе: true
// console.log(text.slice(4, 7)); // Виведе: "Scr"
// console.log(text.replace("Java", "Type")); // Виведе: "TypeScript"
// console.log(text.replaceAll("a", "A")); // Виведе: "JAvAScript"
// console.log(text.includes("Script!")); // Виведе: true

// const str1 = 'I love QA work. QAs are the best. qa Department is great!';
// console.log(str1.replace(/qa/gi, "SDET")); // Виведе: "I love QA work. QAs are the best. QA Department is great!" 