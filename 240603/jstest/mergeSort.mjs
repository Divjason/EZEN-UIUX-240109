const mergeSort = (arr, leftIndex, rightIndex) => {
  if (leftIndex < rightIndex) {
    let midIndex = parseInt((leftIndex + rightIndex) / 2);
    mergeSort(arr, leftIndex, midIndex);
    mergeSort(arr, midIndex + 1, rightIndex);
  }
};

const merge = (arr, leftIndex, midIndex, rightIndex) => {
  let leftAreaIndex = leftIndex;
  let rightAreaIndex = midIndex + 1;

  let tempArr = [];
  tempArr.length = rightIndex + 1;
  tempArr.fill(0, 0, rightIndex + 1);

  let tempArrIndex = leftIndex;
  while (leftAreaIndex <= midIndex && rightAreaIndex <= rightIndex) {
    if (arr[leftAreaIndex] <= arr[rightAreaIndex]) {
      tempArr[tempArrIndex] = arr[leftAreaIndex++];
    } else {
      tempArr[tempArrIndex] = arr[rightAreaIndex++];
    }
    tempArrIndex++;
  }
};
