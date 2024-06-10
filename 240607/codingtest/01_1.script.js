const a = "(()(()))(()";

const solution = (a) => {
  let answer = "YES";
  let stack = [];

  for (let x of a) {
    if (x === "(") {
      stack.push(x);
    } else {
      if (stack.length === 0) {
        return "NO";
      }
      stack.pop();
    }
  }
  if (stack.length > 0) {
    return "NO";
  }
  return answer;
};

console.log(solution(a));
