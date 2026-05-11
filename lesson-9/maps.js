

const myMap = new Map();

const keyObject = { id: 1 };
const keyObject2 = { id: 1 };
console.log(keyObject2 === keyObject); // false, різні об'єкти в пам'яті

const ojb = {
    [keyObject]: 'value1',
    [keyObject2]: 'value2'
};
console.log(ojb)

// console.log(ojb[keyObject]); // Виведе 'value1', але це не працює як очікується, оскільки ключі об'єктів в літералах не працюють як посилання
// console.log(ojb[keyObject2]); 

myMap.set(keyObject, 'value1');
myMap.set(keyObject2, 'value2');
console.log(myMap.get(keyObject)); // Виведе 'value1'
console.log(myMap.get(keyObject2)); // Виведе 'value2', оскільки Map використовує посилання на об'єкти як ключі