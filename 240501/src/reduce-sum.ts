import { range } from "./range";

const reduceSum: number = range(1, 11).reduce(
  (result: number, value: number) => result * value,
  1
);

console.log(reduceSum);
