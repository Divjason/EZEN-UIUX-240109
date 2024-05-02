const array = [1, 2, 3, 4];
const deepCopied = [...array];

deepCopied[0] = 0;

console.log(array, deepCopied);
