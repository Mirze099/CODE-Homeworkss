let arr = [23, 1, 5, 3, 12, 4, 9, 81, 7, 11, 22, 31, 6];

let evenNum = arr.filter(num => num % 2 === 0);
let maxEven = Math.max(...evenNum);
let maxEvenIndex = arr.indexOf(maxEven);

let oddNum = arr.filter(num => num % 2 !== 0);
let minOdd = Math.min(...oddNum);
let minOddIndex = arr.indexOf(minOdd);

[arr[maxEvenIndex], arr[minOddIndex]] = [arr[minOddIndex], arr[maxEvenIndex]];

console.log(arr);
