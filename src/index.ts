import multiply, { multiplyByTwo as mBy2, HelloWorld } from "./multiply";
import * as multiplyModule from "./multiply";
const a = 2;
const b = 500;

console.log(`${a} * ${b}`);
console.log(multiplyModule.default(a, b));

console.log(`2 * ${a}`);
console.log(multiplyModule.multiplyByTwo(a));
console.log(mBy2(a));
