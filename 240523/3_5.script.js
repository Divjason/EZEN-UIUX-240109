const userWord = prompt("연속된 대문자 문자열을 입력하세요!");

const solution = (userWord) => {
  let answer = "";
  let cnt = 1;

  // const test = userWord;

  for (let i = 0; i < userWord.length; i++) {
    if (userWord[i] === userWord[i + 1]) {
      cnt++;
    } else {
      answer += userWord[i];
      if (cnt > 1) {
        answer += String(cnt);
        cnt = 1;
      }
    }
  }

  return answer;
};

console.log(solution(userWord));
