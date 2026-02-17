const board = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
];
const result = 9;
// 가장 큰 정사각형을 구해라.

function solution(board) {
  const boardLength = board.length;
  const columLength = board[0].length;
  let len = 0;

  for (let i = 1; i < boardLength; i++) {
    for (let j = 1; j < columLength; j++) {
      if (board[i][j] === 1) {
        board[i][j] =
          Math.min(board[i][j - 1], board[i - 1][j], board[i - 1][j - 1]) + 1; // 변의 값 구하는거
        console.log(board[i][j], i, j);
        if (board[i][j] > len) {
          len = board[i][j];
          console.log("len : ", len);
        }
      }
    }
  }
  if (board.length === 1 && columLength === 1) {
    if (board[0][0] === 1) return 1;
    if (board[0][0] === 0) return 0;
  }
  return len * len;
}
console.log(solution(board));
