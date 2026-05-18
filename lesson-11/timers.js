


function saySmth(phrase, name) {
  console.log(`${phrase} ${name}!`);
}
// console.log('This will be logged immediately');
// setTimeout(saySmth, 300, 'Hello', 'John');

// const secondTimeout = setTimeout(() => {
//   console.log('This will be logged after 2 seconds');
// }, 0);
// console.log('This will be logged immediately after setting the timeout');
// clearTimeout(secondTimeout); // Скасування другого таймаута

setInterval(saySmth, 2000, 'Hello', 'John');


