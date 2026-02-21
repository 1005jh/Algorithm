// 7,9,10,11 case 실패 (signal: aborted (core dumped))

function solution(x, y, n) {
  const queue = [[x, 0]];
  let head = 0;

  while (head < queue.length) {
    const [cur, count] = queue[head++];

    if (cur === y) return count;

    const next = [cur + n, cur * 2, cur * 3];

    for (let i of next) {
      if (i <= y) {
        queue.push([i, count + 1]);
      }
    }
  }

  return -1;
}
//todo : 너무 큰 배열로 인한 강제종료, 제약조건이 필요
function solution(x, y, n) {
  const visited = new Array(y + 1).fill(0);
  const queue = [[x, 0]];
  let head = 0;
  visited[x] = 1;
  while (head < queue.length) {
    const [cur, count] = queue[head++];
    if (cur === y) return count;

    const next = [cur + n, cur * 2, cur * 3];

    for (let i of next) {
      if (i <= y && visited[i] < 1) {
        visited[i]++;
        queue.push([i, count + 1]);
      }
    }
  }

  return -1;
}
