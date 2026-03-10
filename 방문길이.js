// u 0,1
// l -1,0
// r 1,0
// d 0,-1
// 길이는 5 제한
// 현재 좌표 -> 이동 좌표 뒤집으면 중복
function solution(dirs) {
  var answer = 0;
  let x = 0,
    y = 0;
  let visited = {};
  const move = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };
  for (let dir of dirs) {
    const [dirx, diry] = move[dir];
    const nextx = x + dirx;
    const nexty = y + diry;
    if (nextx < -5 || nextx > 5 || nexty < -5 || nexty > 5) continue;
    const path = `${x}${y}${nextx}${nexty}`;
    const reverse = `${nextx}${nexty}${x}${y}`;
    if (!visited[path]) {
      visited[path] = true;
      visited[reverse] = true;
      answer++;
    }
    x = nextx;
    y = nexty;
  }
  return answer;
}

// set 사용시
new Set();
if (!visited.has(path)) {
  visited.add(path);
  visited.add(reversePath);
}
