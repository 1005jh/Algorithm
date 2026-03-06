// S - L 최소거리
// L - E 최소거리
// 안되는게 있으면 -1
function solution(maps) {
  var answer = 0;
  let col = maps[0].length;
  let row = maps.length;
  let start, lever, end;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (maps[i][j] === "S") start = [i, j];
      if (maps[i][j] === "L") lever = [i, j];
      if (maps[i][j] === "E") end = [i, j];
    }
  }
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function bfs(start_x, start_y, target_x, target_y) {
    const visited = Array.from({ length: row }, () => Array(col).fill(false));
    const queue = [[start_x, start_y, 0]];
    visited[start_x][start_y] = true;

    while (queue.length) {
      const [x, y, dist] = queue.shift();

      if (x === target_x && y === target_y) return dist;

      for (const [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < row &&
          ny < col &&
          !visited[nx][ny] &&
          maps[nx][ny] !== "X"
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny, dist + 1]);
        }
      }
    }

    return -1;
  }
  const toLever = bfs(start[0], start[1], lever[0], lever[1]);
  if (toLever === -1) return -1;

  const toEnd = bfs(lever[0], lever[1], end[0], end[1]);
  if (toEnd === -1) return -1;

  return toLever + toEnd;
}
// todo : bfs 다시 풀기
