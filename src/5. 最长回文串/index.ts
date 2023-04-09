function longestPalindrome(s: string): string {
  const arr: number[] = [];
  let max = '';
  for (let i = 0; i < s.length; i++) {
    arr[i] = getLongestPalindrome(i);
    if (arr[i] > max.length) {
      max = getString(i);
    }
  }
  return max;

  function getString(i: number) {
    return s.substring(i + 1 - arr[i], i + 1);
  }
  function getLongestPalindrome(i: number): number {
    if (i === 0) {
      return 1;
    }
    //  b+b
    if (i === 1) {
      return s[0] === s[1] ? 2 : 1;
    }
    //  b+ b
    if (arr[i - 1] === 1 && s[i] === s[i - 1]) {
      return 2;
    }
    //   a + bb +a
    if (i - arr[i - 1] - 1 >= 0 && s[i] === s[i - arr[i - 1] - 1]) {
      return arr[i - 1] + 2;
    }

    //  bb + b
    if ([...getString(i - 1)].every((item) => item === s[i])) {
      return arr[i - 1] + 1;
    }
    return 1;
  }
}

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('abbcccbbbcaaccbababcbcabca'));
