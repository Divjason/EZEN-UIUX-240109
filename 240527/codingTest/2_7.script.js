// 코딩 테스트 난이도 => 반복문

// N개의 행 & 열 격자판 : N = 5
const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

const solution = (arr) => {
  let answer = 0;
  const n = arr.length;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 행 & 열 총 25개의 값 찾기!!
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];

        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
};

console.log(solution(arr));
