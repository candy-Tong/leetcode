function subsets(nums: number[]): number[][] {
  // []
  // 1 + subset(2,3)
  // 2 + subset(3)
  // 3 + subset([])
  if (nums.length === 0) {
    return [[]];
  }
  const arr: number[][] = [[]];
  for (let i = 0; i < nums.length; i++) {
    const res = subsets(nums.slice(i + 1));
    res.forEach((item) => {
      arr.push([nums[i], ...item]);
    });
  }
  return arr;
}

console.log(subsets([1, 2, 3]));
