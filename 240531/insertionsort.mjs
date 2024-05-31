// let arr = [4, 1, 5, 3, 6, 2];
// let arr = [1, 4, 5, 3, 6, 2];

// i => 1, 2, 3, 4, 5
// insertionData => 1, 5, 3, 6, 2
// j => 0, 1, 2, 3, 4

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
