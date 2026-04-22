// [0],[1] => 두 섬 번호 / [2] => 다리건설비용
// 2단계에 배달하는거였나 마을이동하는거 문제 비슷한거 있었음
// costs에 대한 현재 마을에서 인접마을에 대한 비용관련 리스트 만들기
// 처음은 [0,0] 방문여부 만들어서 체크

function solution(n, costs) {
  var answer = 0;
  const graph = Array.from({ length: n }, () => []);
  // console.log(graph)
  for (let [a, b, c] of costs) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }
  let visited = Array(n).fill(false);
  const queue = [[0, 0]];

  while (queue.length) {
    // console.log(queue)
    queue.sort((a, b) => a[1] - b[1]);
    const [island, cost] = queue.shift();
    if (visited[island]) continue;
    visited[island] = true;
    answer += cost;
    for (let [nextIsland, nextCost] of graph[island]) {
      if (!visited[nextIsland]) queue.push([nextIsland, nextCost]);
    }
  }
  return answer;
}

// 크루스칼 유니온파인드?
function solution(n, costs) {
  // 1. 비용 기준 정렬
  costs.sort((a, b) => a[2] - b[2]);

  // 2. 부모 배열 초기화
  const parent = Array.from({ length: n }, (_, i) => i);

  // 3. find 함수 (부모 찾기)
  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]); // 경로 압축
    }
    return parent[x];
  }

  // 4. union 함수 (합치기)
  function union(a, b) {
    const rootA = find(a);
    const rootB = find(b);

    if (rootA !== rootB) {
      parent[rootB] = rootA;
      return true;
    }
    return false;
  }

  let totalCost = 0;

  // 5. 간선 하나씩 선택
  for (const [a, b, cost] of costs) {
    if (union(a, b)) {
      totalCost += cost;
    }
  }

  return totalCost;
}

// find로 값을 찾아서 같으면 무시하는 선택
// parent 배열의 변화로 값 추출
// 생각지도 못한 방법 ㅇㅇ.
