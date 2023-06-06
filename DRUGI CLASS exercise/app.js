const arr = [528, 23, 339, 99, 33, 200];

// arr.reverse();
// console.log(arr);

// arr.sort((a, b) => a - b);
// console.log(arr);

// arr.sort((a, b) => b - a);
// console.log(arr);

// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

const reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}

console.log(reversed);

maxNum = arr[0];

for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] > maxNum) {
    maxNum = arr[i];
  }
}

console.log(maxNum);

minNum = arr[0];

for (let i = arr.length - 1; i >= 0; i--) {
  if (minNum > arr[i]) {
    minNum = arr[i];
  }
}

console.log(minNum);
