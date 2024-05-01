import { NumberToNumberFunc, add } from "./high-order";

const fn: NumberToNumberFunc = add(1);
const result = fn(2);

console.log(result);
console.log(add(1)(2));
