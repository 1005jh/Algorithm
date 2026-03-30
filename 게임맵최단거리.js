// 크기 n,m
// 마지막 좌표 n-1,m-1
// 방문칸은 다시 x
// 0,-1 좌
// 0,1 우
// -1,0상
// 1,0하
function solution(maps) {
  var answer = 0;
  const n = maps.length;
  const m = maps[0].length;
  const nextx = [0, 0, -1, 1];
  const nexty = [-1, 1, 0, 0];
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  // console.log(visited)
  let queue = [];
  queue.push([0, 0, 1]);
  visited[0][0] = true;
  while (0 < queue.length) {
    const [x, y, dist] = queue.shift();
    if (x === n - 1 && y === m - 1) return dist;
    for (let i = 0; i < 4; i++) {
      const nx = x + nextx[i];
      const ny = y + nexty[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (maps[nx][ny] === 0 || visited[nx][ny]) continue;
      visited[nx][ny] = true;
      queue.push([nx, ny, dist + 1]);
      answer++;
    }
  }
  return -1;
}
