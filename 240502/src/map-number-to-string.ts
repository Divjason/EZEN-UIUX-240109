import { range } from "./range";

const array: number[] = range(1, 11);

const names: string[] = array.map((value, index) => `[${index}] : ${value}`);

console.log(names);
