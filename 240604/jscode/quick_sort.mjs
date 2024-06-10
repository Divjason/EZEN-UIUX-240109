const arr = [5, 3, 7, 2, 4, 6, 9, 1, 8];

const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const divide = (arr, left, right) => {
  let pivot = arr[left];
  let leftStartIndex = left + 1;
  let rightStartIndex = right;

  while (leftStartIndex <= rightStartIndex) {
    while (leftStartIndex <= right && pivot >= arr[leftStartIndex]) {
      leftStartIndex++;
    }
    while (rightStartIndex >= left + 1 && pivot <= arr[rightStartIndex]) {
      rightStartIndex--;
    }
    if (leftStartIndex <= rightStartIndex) {
      swap(arr, leftStartIndex, rightStartIndex);
    }
  }

  swap(arr, left, rightStartIndex);
  return rightStartIndex;
};

const quickSort = (arr, left, right) => {
  //예외조항처리
  if (left <= right) {
    let pivot = divide(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
};

console.log("=== 정렬 전 ===");
console.log(arr);

quickSort(arr, 0, arr.length - 1);

console.log("=== 정렬 후 ===");
console.log(arr);
