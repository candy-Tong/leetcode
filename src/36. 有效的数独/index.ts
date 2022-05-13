function isValidSudoku(board: string[][]): boolean {
  const rowMap: Array<Record<string, boolean>> = Array.from({ length: 9 }).map(() => ({}));
  const columnsMap: Array<Record<string, boolean>> = Array.from({ length: 9 }).map(() => ({}));
  const blockMap: Array<Record<string, boolean>> = Array.from({ length: 9 }).map(() => ({}));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const value = board[i][j];
      if (value === '.') {
        continue;
      }
      if (!rowMap[i][value]) {
        rowMap[i][value] = true;
      } else {
        debugger;
        return false;
      }
      if (!columnsMap[j][value]) {
        columnsMap[j][value] = true;
      } else {
        debugger;
        return false;
      }

      const block = getBlock(i, j);
      if (!blockMap[block][value]) {
        blockMap[block][value] = true;
      } else {
        debugger;
        return false;
      }
    }
  }
  return true;
}

function getBlock(x: number, y: number) {
  if (x < 3) {
    if (y < 3) {
      return 0;
    }
    if (y < 6) {
      return 1;
    }
    return 2;
  }
  if (x < 6) {
    if (y < 3) {
      return 3;
    }
    if (y < 6) {
      return 4;
    }
    return 5;
  }
  if (y < 3) {
    return 6;
  }
  if (y < 6) {
    return 7;
  }
  return 8;
}

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ]),
);

console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ]),
);
