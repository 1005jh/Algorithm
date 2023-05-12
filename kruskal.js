//* Kruskal's 알고리즘
// edges는 그래프의 엣지를 나타내는 객체의 배열로 node1,node2는 각각 연결된 노드의 번호
// weight는 해당 엣지의 가중치
const edges = [
  { node1: 0, node2: 1, weight: 2 },
  { node1: 0, node2: 3, weight: 6 },
  { node1: 1, node2: 2, weight: 3 },
  { node1: 1, node2: 3, weight: 8 },
  { node1: 1, node2: 4, weight: 5 },
  { node1: 2, node2: 4, weight: 7 },
  { node1: 3, node2: 4, weight: 9 },
];
// nodes는 그래프의 노드를 나타내는 값들의 배열로 각 값은 노드의 번호를 나타내며,
// 배열의 인덱스와 일치
const nodes = [0, 1, 2, 3, 4];

function kruskalMST(edges, nodes) {
  const mst = []; // 최소 신장 트리를 담을 배열
  const subsets = []; // 서브트리를 담을 배열

  // 서브트리 배열 초기화
  for (let i = 0; i < nodes.length; i++) {
    subsets.push({ parent: i, rank: 0 });
  }

  // 가중치 기준으로 edge 배열을 정렬
  edges.sort((a, b) => a.weight - b.weight);

  // 간선의 수만큼 반복
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    const x = find(subsets, edge.node1);
    const y = find(subsets, edge.node2);

    // 두 노드가 서로 다른 서브트리에 속해 있다면,
    // 두 서브트리를 합쳐서 mst 배열에 추가
    if (x !== y) {
      mst.push(edge);
      union(subsets, x, y);
    }
  }

  return mst;
}

// 노드가 속한 서브트리의 루트 노드를 찾는 함수
function find(subsets, node) {
  if (subsets[node].parent !== node) {
    subsets[node].parent = find(subsets, subsets[node].parent);
  }

  return subsets[node].parent;
}

// 두 서브트리를 합치는 함수
function union(subsets, x, y) {
  if (subsets[x].rank < subsets[y].rank) {
    subsets[x].parent = y;
  } else if (subsets[x].rank > subsets[y].rank) {
    subsets[y].parent = x;
  } else {
    subsets[y].parent = x;
    subsets[x].rank++;
  }
}

console.log(kruskalMST(edges, nodes));
/*
[
  { node1: 0, node2: 1, weight: 2 },
  { node1: 1, node2: 2, weight: 3 },
  { node1: 1, node2: 4, weight: 5 },
  { node1: 0, node2: 3, weight: 6 }
]
*/
//* ------------------------------------------------------------------------------
function kruskalMST(edges) {
  edges.sort((a, b) => a[2] - b[2]);
  const disjointSet = new DisjointSet(edges.length);
  const mst = [];

  for (const edge of edges) {
    const [u, v, weight] = edge;
    if (!disjointSet.sameSet(u, v)) {
      mst.push(edge);
      disjointSet.union(u, v);
    }
  }
  return mst;
}

class DisjointSet {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, index) => index);
  }

  union(a, b) {
    this.parent[this.find(b)] = this.find(a);
  }

  find(a) {
    if (this.parent[a] !== a) {
      this.parent[a] = this.find(this.parent[a]);
    }
    return this.parent[a];
  }

  sameSet(a, b) {
    return this.find(a) === this.find(b);
  }
}

const edges = [
  [0, 1, 2],
  [1, 2, 3],
  [0, 3, 6],
  [1, 3, 8],
  [1, 4, 5],
  [2, 4, 7],
  [3, 4, 9],
];

console.log(kruskalMST(edges));
//[ [ 0, 1, 2 ], [ 1, 2, 3 ], [ 1, 4, 5 ], [ 0, 3, 6 ] ]
