function spiralOrder(matrix: number[][]): number[] {
  let i = 0;
  let j = 0;
  const arr: number[] = [];

  l2r();

  function l2r() {
    for (; j < matrix[i].length && !isRead(i, j); j++) {
      read(i, j);
    }
    j--;
    if (toNext('down')) {
      t2b();
    }
  }

  function t2b() {
    for (; i < matrix.length && !isRead(i, j); i++) {
      read(i, j);
    }
    i--;
    if (toNext('left')) {
      r2l();
    }
  }

  function r2l() {
    for (; j >= 0 && !isRead(i, j); j--) {
      read(i, j);
    }
    j++;
    if (toNext('up')) {
      b2t();
    }
  }

  function b2t() {
    for (; i >= 0 && !isRead(i, j); i--) {
      read(i, j);
    }
    i++;
    if (toNext('right')) {
      l2r();
    }
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
    return !isRead(i, j);
  }

  function read(i: number, j: number) {
    arr.push(matrix[i][j]);
    matrix[i][j] = NaN;
  }

  function isRead(i: number, j: number) {
      if(!matrix[i]){
          return true
      }
    return isNaN(matrix[i][j]);
  }

  return arr;
}

console.log(spiralOrder([[1]]));
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
);
