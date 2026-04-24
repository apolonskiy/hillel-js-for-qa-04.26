import { randomNumber } from "./export.mjs";


// const variableValue = randomNumber()
// const stringValue = '' //false

// console.log(variableValue);
// if(variableValue % 2 || variableValue > 50 && !stringValue) {
//     console.log("I am here")
// } else {
//     console.log("BROKEN")
// }


//  const variableValue = randomNumber()
//  console.log(variableValue)
// if(variableValue > 80) {
//     console.log("I am really old")
// } else if ( variableValue > 50) {
//     console.log('I am still young');
// } else if ( variableValue > 20) {
//    console.log('I am a child');
// } else {
//     console.log('I am a baby');
// }


let x = 10;
let y = 5;
let z = 15;

if (x > 5) {
  console.log("x більше за 5");
        if (y > 4) {
            console.log("y більше за 4");
                if(z > 10) {
                    console.log("z більше за 10");
                } else{
                    console.log("z менше або рівне 10");
                }
        } else if(y <=4 && y > 2) {
            console.log("y більше за 2, але менше або рівне 4");
        } else {
            console.log("y менше або рівне 2");
        }
} else {
  console.log("x менше або рівне 5");
}

if(x > 5 && y > 4 && z > 10) {
    console.log("x більше за 5, y більше за 4, z більше за 10");
} else if(x > 5 && y > 4 && z <= 10) {
    console.log("x більше за 5, y більше за 4, z менше або рівне 10");
} else if(x > 5 && y <=4 && y > 2) {
    console.log("x більше за 5, y більше за 2, але менше або рівне 4");
} else if(x > 5 && y <=2) {
    console.log("x більше за 5, y менше або рівне 2");
} else {
    console.log("x менше або рівне 5");
}