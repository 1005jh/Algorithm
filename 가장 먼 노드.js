function solution(n, edge) {
  var answer = 0;
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const mins = Array(n + 1).fill(-1);
  const queue = [1];
  mins[1] = 0;
  let head = 0;
  while (head < queue.length) {
    const current = queue[head++];
    for (const next of graph[current]) {
      if (mins[next] === -1) {
        mins[next] = mins[current] + 1;
        queue.push(next);
      }
    }
  }
  const maxDistance = Math.max(...mins);

  return mins.filter((d) => d === maxDistance).length;
}
