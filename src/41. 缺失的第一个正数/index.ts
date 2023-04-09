function firstMissingPositive(nums: number[]): number {
  // let minBegin = -1;
  let minEnd = nums.length - 1;
  let minValue = Infinity;
  let isAdd = false;
  for (let j = 0; j < nums.length; j++) {
    const num = nums[j];
    if (num < 0 || j === 0) {
      if (isAdd) {
        minEnd = j - 1;
        isAdd = false;
      }
      if (minValue > num) {
        minValue = num;
        minEnd = j;
      }
      continue;
    }
    if (nums[j - 1] < minValue && nums[j] - nums[j - 1] === 1) {
      minValue = nums[j - 1];
      if (isAdd) {
        // minBegin = j - 1;
      } else {
        isAdd = true;
        minEnd = j;
      }
    }
  }
  if (minValue !== 1) {
    return 1;
  }
  return nums[minEnd] + 1;
}
// console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1]));
// console.log(firstMissingPositive([7, 8, 9, 11, 12]));
