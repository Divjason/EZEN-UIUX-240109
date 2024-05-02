import { range } from "./range";
import { fold } from "./fold";

const numbers: number[] = range(1, 101);
const result = fold(numbers, (result, value) => result + value, 0);
console.log(result);
