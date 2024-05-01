const functionExpression = function (a: number, b: number): number {
  return a + b;
};

const value = (function (a, b) {
  return a + b;
})(1, 2);
console.log(value);

const isGreator = (a: number, b: number): boolean => {
  return a > b;
};
