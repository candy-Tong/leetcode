function search(nums: number[], target: number): number {
  if (nums.length === 0) {
    return -1;
  }

  let left = 0;
  let right = nums.length - 1;
  let i: number;
  while (left <= right) {
    i = Math.floor((left + right) / 2);
    if (nums[i] === target) {
      return i;
    }
    if (right - left <= 1) {
      return target === nums[left] ? left : target === nums[right] ? right : -1;
    }
    if (nums[left] < nums[i]) {
      // 左边有序
      if (target >= nums[left] && target < nums[i]) {
        right = i - 1;
      } else {
        left = i + 1;
      }
      continue;
    }
    if (nums[i] < nums[right]) {
      // 右边有序
      if (target <= nums[right] && target > nums[i]) {
        left = i + 1;
      } else {
        right = i - 1;
      }
      continue;
    }
  }
  return -1;
}

// console.log(search([4,5,6,7,0,1,2], 0))
// console.log(search([4,5,6,7,0,1,2], 3))
// console.log(search([1], 0))
// console.log(search([1,3], 0))
console.log(search([3, 1], 0));
// console.log(search([1], 1))
