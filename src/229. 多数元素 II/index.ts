function majorityElement(nums: number[]): number[] {
  if (nums.length < 3) {
    return [...new Set(nums)];
  }

  const num = nums.length / 3;
  const map: Record<string, number> = {};
  for (const numElement of nums) {
    if (map[numElement]) {
      map[numElement]++;
    } else {
      map[numElement] = 1;
    }
  }

  const res: number[] = [];
  Object.keys(map).forEach((item) => {
    if (map[item] > num) {
      res.push(parseInt(item, 10));
    }
  });

  return res;
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([1, 2]));
console.log(majorityElement([1]));
