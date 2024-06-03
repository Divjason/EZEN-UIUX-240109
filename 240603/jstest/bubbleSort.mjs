const arr = [4, 2, 3, 1];

// 각각의 숫자는 총 3번의 비교가 필요!
// i => 0, 1, 2 => 3번의 반복
// 0번

// i => 0, 1, 2
// i => 0 // j => 0, 1, 2 => 2314
// i => 1 // j => 0, 1 => 2134
// i => 2 // j => 0 => 1234

const bubbleSort = () => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

console.log("=== 정렬 전 ===");
console.log(arr);

bubbleSort(arr);

console.log("=== 정렬 후 ===");
console.log(arr);

// 등차수열
// 연속하는 두 항의 차이가 모두 일정한 수열!!!
// 1, 3, 5, 7, 9
// (n - 1) * 1 + (n - 1) * 2 + (n - 1) * 3 + (n - 1) * 4+ ... + 1
// 빅오 & 빅오메가 & 빅세타
// 시간복잡도 => O(n2)
