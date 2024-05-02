const multiply = (result: number, val: number): number => result * val;

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tempResult = numbers
  .filter((val) => val % 2 !== 0)
  .map((val) => val * val)
  .reduce(multiply, 1);

const result = Math.sqrt(tempResult);
console.log(result);
