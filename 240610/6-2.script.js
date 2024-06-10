const str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

const solution = (str) => {
  let answer = undefined;
  let stack = [];

  for (let x of str) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else {
      stack.push(x);
    }
  }
  answer = stack.join("");
  return answer;
};

console.log(solution(str));
