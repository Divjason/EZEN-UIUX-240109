import { range } from "./range";

const reduceSum: number = range(1, 101).reduce(
  (result: number, value: number) => result + value,
  0
);

console.log(reduceSum);
