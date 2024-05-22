const userWord = prompt("영어단어를 입력하세요");

const solution = (userWord) => {
  let answer = "YES";
  const test = userWord.toLowerCase();
  const len = test.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (test[i] !== test[len - i - 1]) {
      return "NO";
    }
  }
  return answer;
};

console.log(solution(userWord));
