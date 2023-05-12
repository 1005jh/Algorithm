MST를 찾는 Prim's 알고리즘
function prim(nodes, edges) {
  // MST를 저장할 배열
  let mst = [];

  // 시작 노드 선택
  let start = nodes[0];

  // 방문한 노드를 저장할 Set
  let visited = new Set();
  visited.add(start);

  // 방문한 노드와 연결된 간선을 저장할 배열
  let connectedEdges = edges.filter(edge => edge.start === start || edge.end === start);

  // 간선을 가중치로 정렬
  connectedEdges.sort((a, b) => a.weight - b.weight);

  // MST 구성
  while (visited.size < nodes.length) {
    // 가장 작은 가중치의 간선 선택
    let edge = connectedEdges.shift();

    // 선택한 간선의 양쪽 노드 중 방문하지 않은 노드를 선택
    let nextNode = visited.has(edge.start) ? edge.end : edge.start;

    // 다음 노드 방문
    visited.add(nextNode);

    // MST에 간선 추가
    mst.push(edge);

    // 다음 노드와 연결된 간선을 connectedEdges 배열에 추가
    edges.filter(edge => edge.start === nextNode || edge.end === nextNode)
         .forEach(edge => connectedEdges.push(edge));

    // connectedEdges 배열을 가중치로 정렬
    connectedEdges.sort((a, b) => a.weight - b.weight);
  }

  return mst;
}
const nodes = ['A', 'B', 'C', 'D', 'E'];
const edges = [
  { start: 'A', end: 'B', weight: 4 },
  { start: 'A', end: 'C', weight: 3 },
  { start: 'B', end: 'C', weight: 2 },
  { start: 'B', end: 'D', weight: 5 },
  { start: 'C', end: 'D', weight: 1 },
  { start: 'C', end: 'E', weight: 6 },
  { start: 'D', end: 'E', weight: 4 }
];
console.log(prim(nodes,edges))
/*
[
  { start: 'A', end: 'C', weight: 3 },
  { start: 'C', end: 'D', weight: 1 },
  { start: 'D', end: 'E', weight: 4 },
  { start: 'B', end: 'C', weight: 2 }
]
*/
-------------------------------------------------------------------------------
function primMST(graph) {
  const vertices = graph.length;
  const visited = new Array(vertices).fill(false);
  const mst = new Array(vertices).fill(Infinity);
  mst[0] = 0;
  let u;

  for (let i = 0; i < vertices; i++) {
    u = findMinimumEdge(mst, visited);
    visited[u] = true;
    for (let v = 0; v < vertices; v++) {
      if (graph[u][v] && !visited[v] && graph[u][v] < mst[v]) {
        mst[v] = graph[u][v];
      }
    }
  }
  return mst;
}

function findMinimumEdge(mst, visited) {
  let min = Infinity, minIndex = -1;
  for (let i = 0; i < mst.length; i++) {
    if (!visited[i] && mst[i] < min) {
      min = mst[i];
      minIndex = i;
    }
  }
  return minIndex;
}

const graph = [
  [0, 2, 0, 6, 0],
  [2, 0, 3, 8, 5],
  [0, 3, 0, 0, 7],
  [6, 8, 0, 0, 9],
  [0, 5, 7, 9, 0]
];

console.log(primMST(graph));
//[0, 2, 0, 6, 0]