import { Calculator } from "./method-chain";

const calc = new Calculator();
const result = calc.add(1).add(2).multiply(3).multiply(4).value;
console.log(result);
