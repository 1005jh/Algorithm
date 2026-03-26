// 1번에서 시작 k시간 이내
// a,b는 두 마을 번호/ c는 두 마을 간 걸리는 시간
// 두 마을 도로는 여러개일 수 있음 최단거리 도로로 선택해야함 *

function solution(N, road, K) {
  var answer = 0;
  const infinity = Infinity;

  const graph = Array.from({ length: N + 1 }, () => []);
  // console.log(graph)
  for (const [a, b, c] of road) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  const dist = Array(N + 1).fill(infinity);
  dist[1] = 0;
  // console.log(dist)
  const queue = [[1, 0]];
  while (queue.length > 0) {
    queue.sort((a, b) => a[1] - b[1]);
    // console.log(queue)
    const [current, currentDist] = queue.shift();
    if (currentDist > dist[current]) continue;
    for (const [next, cost] of graph[current]) {
      const newDist = currentDist + cost;

      if (newDist < dist[next]) {
        dist[next] = newDist;
        queue.push([next, newDist]);
      }
    }
  }
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");

  return dist.filter((d) => d <= K).length;
}
