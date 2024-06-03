// [1, 4, 5, 3, 6, 2]
// [1, 4, 5, 3, 6, 2]
// [1, 4, 5, 3, 6, 2]
// [1, 2, 3, 4, 5, 6]

const arr = [4, 1, 5, 3, 6, 2];

// i = 1, 2, 3, 4, 5

// i = 1 / j = 0
// i = 2 / j = 1, 0
// i = 3 / j = 2, 1, 0
// i = 4 / j = 3, 2, 1, 0
// i = 5 / j = 4, 3, 2, 1, 0

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let insertionData = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > insertionData) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }

    arr[j + 1] = insertionData;
  }
};

console.log("=== 정렬 전 ===");
console.log(arr);

insertionSort(arr);

console.log("=== 정렬 후 ===");
console.log(arr);
