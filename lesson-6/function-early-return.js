

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//     return null;
//   } else if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//     return null
//   } else {
//     console.log("Операція зняття коштів проведена успішно");
//     return true;
//   }
// }

// function withdraw(amount, balance) {
//   // Якщо умова виконується, викликається console.log
//   // і вихід із функції. Код після тіла if не виконується.
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//     return null;
//   }

//   // Якщо умова першого if не виконалась, його тіло пропускається
//   // та інтерпретатор доходе до другого if.
//   // Якщо умова виконується, викликається console.log і вихід із функції.
//   // Код, що знаходиться після тіла if, не виконується.
//   if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//     return null;
//   }

//   // Якщо жоден із попередніх if не виконався,
//   // інтерпретатор доходить до цього коду і виконує його.
//   console.log("Операція зняття коштів проведена успішно");
//   return true;
// }

// function withdraw(amount, balance) {
//     switch (true) {
//         case amount === 0:
//             console.log("Для проведення операції введіть суму більшу за нуль");
//             return null;
//         case amount > balance:
//             console.log("Недостатньо коштів на рахунку");
//             return null;
//         default:
//             console.log("Операція зняття коштів проведена успішно");
//             return true;
//     }
// }

// console.log(withdraw(0, 300)) // "Для проведення операції введіть суму більшу за нуль"
// console.log(withdraw(500, 300)); // "Недостатньо коштів на рахунку"
// console.log(withdraw(100, 300)); // "Операція зняття коштів проведена успішно"