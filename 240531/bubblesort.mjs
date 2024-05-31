const arr = [4, 2, 3, 1];

// i는 0, 1, 2, "3"
// j는 012 / 01 / 0 /

const bubbleSort = (arr) => {
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
console.log(arr);
bubbleSort(arr);
console.log(arr);
