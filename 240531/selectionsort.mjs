const arr = [4, 2, 1, 3];

// i => 0, 1, 2
// j => 1/2/3, 2/3, 3
// 2,1,3 < 4

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minValueIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValueIndex]) {
        minValueIndex = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minValueIndex];
    arr[minValueIndex] = temp;
  }
};
