// reduce koji menja map i filter kombinaciju
const nums = [2, 343, 54, 323, 33, 321, 1, 11, 64, 90];
console.log(nums);

const newArry = nums.reduce((a, c) => {
  if (c % 2 === 0) {
    a.push(c * 99);
  }
  return a;
}, []);

console.log(newArry);

// kako naci max broj array-a preko reduce

const max = nums.reduce((a, c) => {
  if (a > c) {
    return a;
  } else {
    return c;
  }
}, -Infinity);

console.log(max);
