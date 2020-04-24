import multiply, { multiplyByTwo } from "./multiply";
import * as multiplyModule from "./multiply";
const a = 2;
const b = 500;

console.log(`${a} * ${b}`);
console.log(multiply(a, b));

console.log(`2 * ${a}`);
console.log(multiplyModule.multiplyByTwo(a));
