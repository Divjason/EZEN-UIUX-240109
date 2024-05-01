const calc = (value: number, cb: (arg0: number) => void) => {
  const add = (a: number, b: number): number => a + b;
  const multiply = (a: number, b: number): number => a * b;
  const result = multiply(add(1, 2), value);
  cb(result);
};

calc(30, (result: number) => console.log(`result is ${result}`));
