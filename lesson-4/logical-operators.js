
// || logical OR
// console.log(true || true); // true // 1 + 1 = 1
// console.log(false || true); // true // 0 + 1 = 1
// console.log(true || false); // true // 1 + 0 = 1
// console.log(false || false); // false // 0 + 0 = 0

// console.log(1 || 0); // 1 (1 є першим правдивим значенням)
// console.log(null || 1); // 1 (1 є першим правдивим значенням)
// console.log(undefined || 'w' || null || 0 || '' ||  'q'); // 1 (перше правдиве значення)
// console.log(undefined || null || 0); // 0 (усі хибні, повертається останнє значення)


// && logical AND
// console.log(true && true); // true // 1 * 1 = 1
// console.log(false && true); // false // 0 * 1 = 0
// console.log(true && false); // false // 1 * 0 = 0
// console.log(false && false); // false // 0 * 0 = 0

// const variableValue = ''

// const result = variableValue || 'default value';
// const resultOptional = variableValue ?? 'default value'; // nullish coalescing operator

// console.log(result); // Виведе: 'default value' (оскільки variableValue є хибним)
// console.log(resultOptional); // Виведе: '' (оскільки variableValue не є null або undefined) 


// console.log(!true); // false
// console.log(!0); // true
// console.log(!''); // true


// ternary operator
const a = 5;
const result = a > 3 ? 'greater than 3' : 'less than or equal to 3';
console.log(result); // Виведе: 'greater than 3' (оскільки a більше за 3)