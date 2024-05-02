import { range } from "./range";

const array: number[] = range(1, 11);
const half = array.length / 2;

const belowHalf: number[] = array.filter((value, index) => index < half);
const overHalf: number[] = array.filter((value, index) => index >= half);

console.log(belowHalf, overHalf);
