import { mergeArray } from "./mergeArray";

const mergeArray01: string[] = mergeArray(["Hello"], ["World"]);
console.log(mergeArray01);

const mergeArray02: number[] = mergeArray(
  [1],
  [2, 3],
  [4, 5, 6],
  [7, 8, 9, 10]
);
console.log(mergeArray02);
