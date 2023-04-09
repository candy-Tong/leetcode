function removeDuplicates(nums: number[]): number {
  let i = 0;
  for (const num of nums) {
    if (num !== nums[i-1] || i===0) {
      nums[i-1] = num;
      i++;
    }
  }
  return i
}

console.log(removeDuplicates([1, 1, 2]));
