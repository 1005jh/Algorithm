// 트리구조 bfs나 dfs
// 끊은 후 두 트리의 차이가 최솟값?
// n-탐색노드수는 반대노드수
function solution(n, wires) {
  var answer = Infinity;
  for (let i = 0; i < wires.length; i++) {
    // const tree = new Array(n+1).fill([])
    // console.log(tree)
    const tree = Array.from({ length: n + 1 }, () => []);
    for (let j = 0; j < wires.length; j++) {
      if (i === j) continue;
      const [a, b] = wires[j];
      tree[a].push(b);
      tree[b].push(a);
    }
    console.log(tree);
    const visited = Array(n + 1).fill(false);
    let queue = [1];
    visited[1] = true;
    let count = 1;
    while (queue.length) {
      const node = queue.shift();

      for (let next of tree[node]) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
          count++;
        }
      }
    }
    const diff = Math.abs(count - (n - count));
    answer = Math.min(answer, diff);
  }

  return answer;
}
// new Array(n + 1).fill([]);을 하게 되면 모든 칸이 공유됨
// Array.from({ length: n + 1 }, () => []);는 매번 새로운 배열을 생성
