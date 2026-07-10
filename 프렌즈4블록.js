function solution(m, n, board) {
  var answer = 0;
  const map = board.map((row) => row.split(""));
  while (true) {
    const remove = Array.from({ length: m }, () => Array(n).fill(false));

    let hasBlock = false;
    for (let row = 0; row < m - 1; row++) {
      for (let col = 0; col < n - 1; col++) {
        const block = map[row][col];
        if (block === null) {
          continue;
        }

        if (
          block === map[row][col + 1] &&
          block === map[row + 1][col] &&
          block === map[row + 1][col + 1]
        ) {
          remove[row][col] = true;
          remove[row][col + 1] = true;
          remove[row + 1][col] = true;
          remove[row + 1][col + 1] = true;

          hasBlock = true;
        }
      }
    }

    if (!hasBlock) {
      break;
    }

    for (let row = 0; row < m; row++) {
      for (let col = 0; col < n; col++) {
        if (remove[row][col]) {
          map[row][col] = null;
          answer++;
        }
      }
    }

    for (let col = 0; col < n; col++) {
      let writeRow = m - 1;

      for (let row = m - 1; row >= 0; row--) {
        if (map[row][col] !== null) {
          map[writeRow][col] = map[row][col];
          writeRow--;
        }
      }

      for (let row = writeRow; row >= 0; row--) {
        map[row][col] = null;
      }
    }
  }

  return answer;
}

// 다시풀기 전체를 한번에 지우고 블록을 내리고 다시 찾아야함
