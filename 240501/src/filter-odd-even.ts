import { range } from "./range";

const array: number[] = range(1, 11);

const odds = array.filter((value) => value % 2 !== 0);
const evens = array.filter((value) => value % 2 === 0);

console.log(odds, evens);
