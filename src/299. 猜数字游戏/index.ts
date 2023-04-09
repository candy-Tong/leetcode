function getHint(secret: string, guess: string): string {
  if (secret === guess) {
    return `${secret.length}A0B`;
  }

  let A = 0;
  let B = 0;
  const map: Record<string, number> = {};
  const positionMap = new Map<number, true>();
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      A++;
      positionMap.set(i, true);
      continue;
    } else if (map[secret[i]]) {
      map[secret[i]]++;
    } else if (!map[secret[i]]) {
      map[secret[i]] = 1;
    }

    if (map[guess[i]]) {
      B++;
      map[guess[i]]--;
    }
  }

  // for (let i = 0; i < secret.length; i++) {
  //   if (positionMap.get(i)) {
  //     continue;
  //   }
  //   if (map[guess[i]]) {
  //     B++;
  //     map[guess[i]]--;
  //   }
  // }
  return `${A}A${B}B`;
}

console.log(getHint('1807', '7810'));
console.log(getHint('1123', '0111'));
