// [6, 3, 4, 1, 2, 5]
// [1, 6, 3, 4, 2, 5]
// [1, 2, 3, 4, 5, 6]

const arr = [4, 2, 1, 3];

// 각 아이템은 3번의 반복이 필요하다!!
// i = 0, 1, 2
// 초기 세팅값 = i값을 가장 작은 값을 가지고 있는 인덱스라고 정의!!!!
//i = 0 / j = 1, 2, 3
//i = 1 / j = 2, 3
//i = 2 / j = 3

const seletionSort = (arr) => {
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
seletionSort(arr);
console.log(arr);
