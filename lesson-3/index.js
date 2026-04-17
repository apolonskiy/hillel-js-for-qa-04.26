// string
'Hello, "World!"'
"Other string like 'this'"
const abc = "qqq"

console.log(`Template string ${abc}`)

console.log(typeof 'Hello, World!')

// number
42
3.14
-1

console.log(typeof 3.14)

console.log(1 / 0); // Infinity
console.log(typeof Infinity); // number

console.log("number" / 2); // NaN,
const nan = "number" / 2 // => NaN
console.log(isNaN(nan)) // true
console.log(typeof nan) // NaN
console.log(1 + "str");

//boolean
true
false

console.log(typeof true)

//undefined
let x;
console.log(x) // undefined
console.log(undefined)
console.log(typeof undefined)

//null
let y = null;
console.log(y) // null
console.log(typeof null) // object (this is a quirk in JavaScript)

// symbol
const mySymbol = Symbol();
const id1 = Symbol("id");// додаємо опис
const id2 = Symbol("id");// додаємо опис

console.log('id' == 'id');
console.log(id1 == id2); // false, кожен символ унікальний
console.log(id1); 
console.log(typeof mySymbol); // symbol