function findRepeatedDnaSequences(s: string): string[] {
  const l = 10;
  const res: string[] = [];
  const map: Record<string, number> = {};
  let str = '';
  for (let i = 0; i + l <= s.length; i++) {
    if (!str) {
      str = s.substring(0, l);
    } else {
      str = str.slice(1) + s[i + l - 1];
    }
    if (map[str] && map[str] !== 2) {
      res.push(str);
      map[str] = 2;
    } else if (!map[str]) {
      map[str] = 1;
    }
  }

  return res;
}

console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));
// 输出：["AAAAACCCCC","CCCCCAAAAA"]

console.log(findRepeatedDnaSequences('AAAAAAAAAAAAA'));
console.log(findRepeatedDnaSequences('AAAAAAAAAAA'));
// 输出：["AAAAAAAAAA"]
