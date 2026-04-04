// 한 방향으로 이동시 이동 못 할 때까지 이동
// 최소 이동횟수 구하기
// 1. R 찾기
// 2. 위치 이동횟수 저장
// 3. 멈춘 위치가 G이면 바로 리턴(멈춘 위치 중요)

function solution(board) {
  const n = board.length;
  const m = board[0].length;
  var answer = 0;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let start;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "R") start = [i, j];
    }
  }
  const visited = Array.from({ length: n }, () => Array.from(m).fill(false));
  const queue = [];

  queue.push([start[0], start[1], 0]);
  visited[start[0]][start[1]] = true;
  // console.log(queue)
  while (queue.length) {
    const [x, y, count] = queue.shift();
    // console.log(count)
    if (board[x][y] === "G") return count;
    for (let [dx, dy] of dirs) {
      let nowx = x;
      let nowy = y;
      while (true) {
        const nextx = nowx + dx;
        const nexty = nowy + dy;
        if (
          nextx < 0 ||
          nextx >= board.length ||
          nexty < 0 ||
          nexty >= board[0].length ||
          board[nextx][nexty] === "D"
        )
          break;

        nowx = nextx;
        nowy = nexty;
      }
      if (visited[nowx][nowy]) continue;
      visited[nowx][nowy] = true;
      console.log(queue);
      queue.push([nowx, nowy, count + 1]);
    }
  }
  return -1;
}
