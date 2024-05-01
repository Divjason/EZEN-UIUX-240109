const calc = (value: number, cb: (arg0: number) => void): void => {
  const add = (a: number, b: number): number => a + b;
  const multifly = (a: number, b: number): number => a * b;
  const result = multifly(add(1, 2), value);
  cb(result);
};

calc(30, (result: number) => console.log(`result is ${result}`));
