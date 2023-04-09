function generateMatrix(n: number): number[][] {
  if(n===1){
    return [[1]]
  }
  const arr: number[][] = Array.from({ length: n }).map(() => []);
  let i = 0;
  let j = 0;
  let num = 1;

  while (true) {
    for (; j < n && !isRead(); j++) {
      read();
    }
    j--;
    if (!toNext('down')) {
      break;
    }

    for (; i < n && !isRead(); i++) {
      read();
    }
    i--;
    if (!toNext('left')) {
      break;
    }

    for (; j >= 0 && !isRead(); j--) {
      read();
    }
    j++;
    if (!toNext('up')) {
      break;
    }

    for (; i >= 0 && !isRead(); i--) {
      read();
    }
    i++;
    if (!toNext('right')) {
      break;
    }
  }

  return arr;

  function isRead() {
    return arr[i][j] !== undefined;
  }

  function read() {
    arr[i][j] = num;
    num++;
  }

  function toNext(direction: string) {
    switch (direction) {
      case 'down':
        i++;
        break;
      case 'left':
        j--;
        break;
      case 'right':
        j++;
        break;
      case 'up':
        i--;
        break;
    }
    return !isRead();
  }
}

console.log(generateMatrix(3))
console.log(generateMatrix(1))
