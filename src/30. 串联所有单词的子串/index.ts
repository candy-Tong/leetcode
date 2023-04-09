function findSubstring(s: string, words: string[]): number[] {
  const single_length = words[0].length;
  const l = words.length * single_length;
  const arr = [];

  function is(s: string): boolean {
    const wordsMap: Record<string, number> = {};
    words.forEach((item) => {
      wordsMap[item] = wordsMap[item] ? ++wordsMap[item] : 1;
    });
    while (s.length) {
      const pre = s.substring(0, single_length);
      if (!wordsMap[pre]) {
        return false;
      }
      s = s.substring(single_length);
      wordsMap[pre]--;
      if (wordsMap[pre] === 0) {
        delete wordsMap[pre];
      }
    }

    debugger;
    if (Object.keys(wordsMap).length === 0) {
      return true;
    }
    return false;
  }

  for (let i = 0; i <= s.length - l; i++) {
    if (is(s.substring(i, i + l))) {
      arr.push(i);
    }
  }
  return arr;
}
// console.log(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word']));
// console.log(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the']));
console.log(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'good']));
