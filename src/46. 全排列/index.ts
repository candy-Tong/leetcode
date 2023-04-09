const map: Record<string, number[][]> = {};

function permute(nums: number[]): number[][] {
  const key = nums.join(',');
  if (map[key]) {
    return map[key];
  }
  const arr: number[][] = [];
  if (nums.length === 1) {
    return [nums];
  }

  for (let i = 0; i < nums.length; i++) {
    permute([...nums.slice(0, i), ...nums.slice(i + 1, nums.length)]).forEach((item) => {
      arr.push([nums[i], ...item]);
    });
    // arr.push([nums[i], );
  }
  map[key] = arr;
  return arr;
}

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));
