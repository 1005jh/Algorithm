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
  // console.log(graph)
  //     [
  //   [],
  //   [ [ 2, 1 ], [ 4, 2 ] ],
  //   [ [ 1, 1 ], [ 3, 3 ], [ 5, 2 ] ],
  //   [ [ 2, 3 ], [ 5, 1 ] ],
  //   [ [ 1, 2 ], [ 5, 2 ] ],
  //   [ [ 2, 2 ], [ 3, 1 ], [ 4, 2 ] ]
  // ]
  const queue = [[1, 0]];
  while (queue.length > 0) {
    queue.sort((a, b) => a[1] - b[1]);
    console.log(queue);
    const [current, currentDist] = queue.shift();
    // console.log(dist)
    if (currentDist > dist[current]) continue;
    for (const [next, cost] of graph[current]) {
      const newDist = currentDist + cost;
      // [ [ 2, 1 ], [ 4, 2 ] ],
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
// 	[ [ 1, 0 ] ]
// [ [ 2, 1 ], [ 4, 2 ] ]
// [ [ 4, 2 ], [ 5, 3 ], [ 3, 4 ] ]
// [ [ 5, 3 ], [ 3, 4 ] ]
// [ [ 3, 4 ] ]
// 	[ Infinity, 0, Infinity, Infinity, Infinity, Infinity ]
// [ Infinity, 0, 1, Infinity, 2, Infinity ]
// [ Infinity, 0, 1, 4, 2, 3 ]
// [ Infinity, 0, 1, 4, 2, 3 ]
// [ Infinity, 0, 1, 4, 2, 3 ]

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[parent][1] <= this.heap[index][1]) break;

      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let smallest = index;

      if (left < length && this.heap[left][1] < this.heap[smallest][1]) {
        smallest = left;
      }

      if (right < length && this.heap[right][1] < this.heap[smallest][1]) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function solution(N, road, K) {
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let [a, b, c] of road) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  const dist = Array(N + 1).fill(Infinity);
  dist[1] = 0;

  const heap = new MinHeap();
  heap.push([1, 0]);

  while (!heap.isEmpty()) {
    const [current, currentDist] = heap.pop();

    if (currentDist > dist[current]) continue;

    for (let [next, cost] of graph[current]) {
      const newDist = currentDist + cost;

      if (newDist < dist[next]) {
        dist[next] = newDist;
        heap.push([next, newDist]);
      }
    }
  }

  return dist.filter((d) => d <= K).length;
}
