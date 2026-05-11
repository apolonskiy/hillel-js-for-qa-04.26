// import { objGenerator } from "./object-export.mjs"

// const object = objGenerator("John", 25, "male");


// console.log(object?.childrenData?.childName)


// const user = {
//     name: "John",
//     address: {
//         city: "New York",
//         zipcode: "10001"
//     }
// };

// // Без оператора опціонального доступу
// const city = user?.address?.city;
// console.log(city)

// expect(object.childrenData?.name).toBe('Marry')
// console.log('undefined is not equal to "Marry" at line blabla');

// ----

// const process = {
//     env:{
//         SOME_ENV_VARIABLE: 'Env Value'
//     }
// }

const blackBoxValue = null;
const resultingValue = blackBoxValue || false || 'Default Value';
const coalescingResultingValue = blackBoxValue ?? undefined ?? 'Default Value';

const vallueFromEnv = process.env.SOME_ENV_VARIABLE || 'Default Env Value';
console.log(resultingValue); // Виведе 'TruthyValue', оскільки blackBoxValue є істинним значенням
console.log(coalescingResultingValue); // Виведе '', оскільки blackBoxValue є визначеним, але хибним значенням
console.log(vallueFromEnv);