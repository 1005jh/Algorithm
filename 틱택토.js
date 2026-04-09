// O,X 갯수 체크 o === x || o === x + 1
// 승리 조건 가로/세로 3씩 대각 2
// 승리시 o,x 갯수 o 승리시 o = x+1 / x 승리시 o=x

function solution(board) {
  var answer = -1;
  let o = 0;
  let x = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "O") o++;
      if (board[i][j] === "X") x++;
    }
  }
  if (!(o === x || o === x + 1)) return 0;
  const winlose = (e) => {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === e && board[i][1] === e && board[i][2] === e)
        return true;
      if (board[0][i] === e && board[1][i] === e && board[2][i] === e)
        return true;
    }
    if (board[0][0] === e && board[1][1] === e && board[2][2] === e)
      return true;
    if (board[0][2] === e && board[1][1] === e && board[2][0] === e)
      return true;
    return false;
  };
  const owin = winlose("O");
  const xwin = winlose("X");
  // console.log(owin,xwin)
  if (owin && xwin) return 0;
  else if (owin && o !== x + 1) return 0;
  else if (xwin && o !== x) return 0;
  return 1;
}
