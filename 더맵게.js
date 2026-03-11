// 섞어야하는 최소횟수 정렬필요
// shift() + shift() * 2

function solution(scoville, K) {
  var answer = 0;
  scoville.sort((a, b) => a - b);
  while (scoville[0] < K) {
    if (scoville.length === 1) return -1;
    const first = scoville.shift();
    const second = scoville.shift();
    const newScoville = first + second * 2;
    scoville.push(newScoville);
    scoville.sort((a, b) => a - b);
    answer++;
  }
  return answer;
}

// 효율성 실패
// todo : Heap 사용하기

//         1
//       /   \
//      3     5
//     / \   /
//    7   9 8
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      // 트리구조이기 때문에
      // parent = Math.floor((i - 1) / 2);
      // left = i * 2 + 1;
      // right = i * 2 + 2;
      let parent = Math.floor((index - 1) / 2);

      if (this.heap[parent] <= this.heap[index]) break;

      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];

      index = parent;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return min;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < length && this.heap[right] < this.heap[smallest]) {
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

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();
  let count = 0;

  scoville.forEach((v) => heap.push(v));

  while (heap.size() > 1 && heap.peek() < K) {
    const first = heap.pop();
    const second = heap.pop();

    const newScoville = first + second * 2;
    heap.push(newScoville);

    count++;
  }

  return heap.peek() >= K ? count : -1;
}
