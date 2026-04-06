// 남은병사 < 현재 라운드 적 수  = 종료
// 무적권 k번 사용가능 적이 많은 라운드 사용
// 하나씩 줄여서 해보기
// 힙

function solution(n, k, enemy) {
  var answer = 0;
  let m = enemy.length;
  let bool = false;
  const defend = (n, k, enemy, round) => {
    let arr = enemy.slice(0, round);
    // console.log("11",round)
    arr.sort((a, b) => b - a);
    let sum = 0;
    for (let i = k; i < arr.length; i++) {
      sum += arr[i];
      // console.log(sum)
      if (n < sum) return false;
    }
    return true;
  };
  while (!bool) {
    if (defend(n, k, enemy, m)) {
      // console.log("asdf", m)
      answer = m;
      bool = true;
    } else {
      // console.log("123")
      m -= 1;
    }
  }
  return answer;
}
// 하나씩 줄이는 방법 몇몇개 시간초과
// 남은병사 < 현재 라운드 적 수  = 종료
// 무적권 k번 사용가능 적이 많은 라운드 사용
// 하나씩 줄여서 해보기
// 힙
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

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return min;
  }

  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];

      if (parent <= element) break;

      this.heap[idx] = parent;
      idx = parentIdx;
    }

    this.heap[idx] = element;
  }

  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swap = null;

      if (leftIdx < length) {
        if (this.heap[leftIdx] < element) {
          swap = leftIdx;
        }
      }

      if (rightIdx < length) {
        if (
          (swap === null && this.heap[rightIdx] < element) ||
          (swap !== null && this.heap[rightIdx] < this.heap[leftIdx])
        ) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;

      this.heap[idx] = this.heap[swap];
      idx = swap;
    }

    this.heap[idx] = element;
  }
}
function solution(n, k, enemy) {
  const heap = new MinHeap();

  for (let i = 0; i < enemy.length; i++) {
    heap.push(enemy[i]);

    if (heap.size() > k) {
      n -= heap.pop();
    }

    if (n < 0) {
      return i;
    }
  }
  return enemy.length;
}
// 힙 통과 힙 만들기

// 이렇게 하면 오래걸리지만 되긴함 데이터가 많아지면 불가능
function solution(n, k, enemy) {
  var answer = 0;
  let l = 0;
  let m = enemy.length;
  const defend = (n, k, enemy, round) => {
    let arr = enemy.slice(0, round);
    // console.log("11",round)
    arr.sort((a, b) => b - a);
    let sum = 0;
    for (let i = k; i < arr.length; i++) {
      sum += arr[i];
      // console.log(sum)
      if (n < sum) return false;
    }
    return true;
  };
  while (l <= m) {
    let mid = Math.floor((l + m) / 2);
    if (defend(n, k, enemy, mid)) {
      // console.log("asdf", m)
      answer = mid;
      l = mid + 1;
    } else {
      // console.log("123")
      m = mid - 1;
    }
  }
  return answer;
}
