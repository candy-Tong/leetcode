function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return 1;
  }
  const map: Record<string, boolean> = {};

  for (const num of nums) {
    map[num] = true;
  }

  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i] - 1]) {
      continue;
    }
    let currentLength = 1;
    while (map[nums[i] + currentLength]) {
      currentLength++;
    }
    max = Math.max(max, currentLength);
  }
  return max;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([0]));
console.log(longestConsecutive([-1, 0, 1]));
console.log(longestConsecutive([4, 0, -4, -2, 2, 5, 2, 0, -8, -8, -8, -8, -1, 7, 4, 5, 5, -4, 6, 6, -3]));
console.log(longestConsecutive([4, 0, -4, -2, 2, 5, 2, 0, -8, -8, -8, -8, -1, 7, 4, 5, 5, -4, 6, 6, -3]));
