

const set = new Set(); // Порожній об'єкт Set
const setFromArray = new Set([1, 2, 3, 3, 4, 4, 5]); // Створення з масиву
console.log(set); // Set(0) {}
console.log(setFromArray); // Set(5) { 1, 2, 3, 4, 5 }
console.log([...setFromArray])

console.log(['str'] == ['str']); // false, різні об'єкти в пам'яті
console.log(['str'][0] === ['str'][0]); // true, однакові примітивні значення
console.log({} == {}); // false, різні об'єкти в пам'яті