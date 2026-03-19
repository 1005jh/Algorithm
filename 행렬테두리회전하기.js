// 행렬 생성 하기
// 테두리 값 이동하면서 최솟값 비교
// i*columns+j+1 좌표별 수
// 좌표값이 인덱스값이 아님 주의
// 한줄씩 이동시키는거 진행하기
// 덮어씌어지는거 조심
function solution(rows, columns, queries) {
  var answer = [];
  const board = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: columns }, (_, j) => i * columns + j + 1),
  );
  // console.log(board)
  // x가 세로 y가 가로
  for (let [x1, y1, x2, y2] of queries) {
    let ix1 = x1 - 1;
    let iy1 = y1 - 1;
    let ix2 = x2 - 1;
    let iy2 = y2 - 1;
    let target = board[ix1][iy1];
    let min = target;
    // console.log(min)
    // 윗줄
    for (let i = iy1 + 1; i <= iy2; i++) {
      let temp = board[ix1][i];
      board[ix1][i] = target;
      target = temp;
      min = Math.min(min, target);
    }
    //오른쪽줄
    for (let i = ix1 + 1; i <= ix2; i++) {
      let temp = board[i][iy2];
      board[i][iy2] = target;
      target = temp;
      min = Math.min(min, target);
    }
    //아랫줄
    for (let i = iy2 - 1; iy1 <= i; i--) {
      let temp = board[ix2][i];
      board[ix2][i] = target;
      target = temp;
      min = Math.min(min, target);
    }
    //왼쪽
    for (let i = ix2 - 1; ix1 <= i; i--) {
      let temp = board[i][iy1];
      board[i][iy1] = target;
      target = temp;
      min = Math.min(min, target);
    }
    answer.push(min);
  }
  return answer;
}

// 행렬만들기 => i * columns + j + 1 로 좌표마다 값
// const board = Array.from({ length: rows }, (_, i) =>
//     Array.from({ length: columns }, (_, j) => i * columns + j + 1),
