const numbers = [5, 7, 10, 11, 3];

function sum(nums) {
  let i = 0;
  for (let num of nums) {
    i += num;
  }
  return i;
}

function biggestOf(nums) {
  let big = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > big) {
      big = nums[i];
    }
  }
  return big;
}

function avrage(nums) {
  return sum(nums) / nums.length;
}

console.log(sum(numbers));
console.log(biggestOf(numbers));
console.log(avrage(numbers));
console.log(sum([1, 2, 3]));
