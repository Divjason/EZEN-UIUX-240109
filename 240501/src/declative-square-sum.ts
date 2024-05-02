import { range } from "./range";
import { fold } from "./fold";
import { map } from "./map";

const numbers = range(1, 101);
const result = fold(
  map(numbers, (value) => value * value),
  (result, value) => result + value,
  0
);
console.log(result);
