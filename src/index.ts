function sum(a: number = 0, b?: number): number {
  return a + (b || 0);
}

type MyFunc = (a: number, b: number) => number;

const sum2: MyFunc = (a, b) => a + b;
console.log(sum2(1, 2));
console.log(sum());
console.log(sum(1));
console.log(sum(1, 5));

// varargs
function sumEverything(...numbers: number[]): number {
  return numbers.reduce((acc, elem) => acc + elem, 0);
}

console.log(sumEverything(1, 2, 3, 4));

// overlads
function calcArea(width: number, height: number): number;
function calcArea(length: number): number;

function calcArea(...args: number[]): number {
  if (args.length === 2) {
    return args[0] * args[1];
  } else {
    return args[0] ** 2;
  }
}

console.log(calcArea(2, 2));
console.log(calcArea(6));
