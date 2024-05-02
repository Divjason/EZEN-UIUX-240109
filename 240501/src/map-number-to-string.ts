import { range } from "./range";

const names: string[] = range(1, 6).map((val, index) => `[${index}] : ${val}`);

console.log(names);
