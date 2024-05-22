const str = "found7, time: study Yduts :emit ,7Dnuof";
// ["f","o","u","n","d"....]

const solution = (str) => {
  let answer = "YES";
  const test = str.toLowerCase().replace(/[^a-z]/g, "");

  if (test.split("").reverse().join("") !== test) {
    return "NO";
  }

  return answer;
};

console.log(solution(str));
