import { range } from "./range";

const array: number[] = range(1, 11);
const squres = array.map((value: number) => value * value);

console.log(squres);
