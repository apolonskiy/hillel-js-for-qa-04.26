
let msg = 'qwe';

let msgExplicit: string;

msg = 'asd'

msgExplicit = 'qwe';

// msg()

type TMyName = 'Andrii' | 'ANDRII' | 'andrii';

let myName: TMyName = 'Andrii';

const myNameGenerator = (name: TMyName = 'Andrii', age?: number): string => {
  return `My name is ${name} and I am ${age} years old.`;
}

const myAge = '10'

const result = myNameGenerator('andrii', myAge  as unknown as number);
console.log(result)

// ----
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
// printCoord({ x: 3, y: 7,  });

// --


 type TPrintNames = { first: string; last?: string }

 interface IPrintNames {
  first: string;
  last?: string;
}

interface IPrintNameAge extends IPrintNames {
  age: number;
}

export function printName(obj: IPrintNames) {
  return `My name is ${obj.first} ${obj.last}`;
}
// Both OK
// printName({ first: "Bob"});
// printName({ first: "Alice", last: "Alisson" });


