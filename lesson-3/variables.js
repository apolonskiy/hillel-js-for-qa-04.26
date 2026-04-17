
const str = 'String value'; 
console.log(str);
const snake_case = 'Str2'; // don't do in JS
const camelCase = 'Str3';
const num = 42;
const bool = true;

const GLOBAL_VARIABLE = 'I am global';
const GlobalVariable = 'I am global';
// camelCase = 'Str4'; // this will not work


//----
console.log(oldVar)
// console.log(undef) // ReferenceError: Cannot access 'undef' before initialization
console.log('\n\n')

let undef;
console.log(undef); // undefined
undef = 'Now I have a value';
console.log(undef); // Now I have a value
undef = 345;
console.log(undef); // 345 

let a = 10;
console.log(a); // 10

//----

var oldVar =  'Old variable';
console.log(oldVar); // Old variable
oldVar = 555
console.log(oldVar); // 555

// example in scope of visibility

{
    let blockScoped = 'I am block scoped';
    var notScoped = 'I am not block scoped';
    console.log(blockScoped); // I am block scoped
}

console.log(notScoped); // I am not block scoped
// const blockScoped = 'THIS WORKS';
console.log(blockScoped); 