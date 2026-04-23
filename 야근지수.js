// works에서 n만큼을 깍고 제곱한 값들의 합
// 균등 분배가 관건
// n이 클 시 0
// 같은 크기로 깍고 나머지가 있으면 처리

function solution(n, works) {
  var answer = 0;
  const totalSum = works.reduce((a, b) => a + b, 0);
  if (totalSum <= n) return 0;
  let left = 0;
  let right = Math.max(...works);
  let currentMid = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let rest = 0;
    // console.log(mid,left,right)
    for (let work of works) {
      if (mid < work) rest += work - mid;
    }
    if (n < rest) left = mid + 1;
    else {
      currentMid = mid;
      right = mid - 1;
    }
  }
  console.log(currentMid);
  const arr = works.map((work) => {
    if (currentMid < work) {
      const rest = work - currentMid;
      // console.log(rest)
      n -= rest;
      // console.log(n,"n")
      return currentMid;
    }
    return work;
  });
  // console.log(arr,n)\
  let i = 0;
  while (0 < n) {
    arr.sort((a, b) => b - a);
    if (0 < arr[i]) {
      arr[i]--;
      n--;
    }
    i = (i + 1) % arr.length;
  }
  for (let i of arr) {
    answer += i * i;
  }
  return answer;
}
// 정렬방식이랑 힙방식으로도 가능하다 함
// 정렬방식
function solution(n, works) {
  works.sort((a, b) => b - a); // 내림차순

  let i = 0;

  while (n > 0) {
    // 현재 최고값 구간 찾기
    let j = i;
    while (j < works.length && works[j] === works[i]) {
      j++;
    }

    const count = j - i; // 같은 값 개수
    const next = j < works.length ? works[j] : 0;
    const diff = works[i] - next;

    const need = diff * count;

    if (n >= need) {
      for (let k = i; k < j; k++) {
        works[k] = next;
      }
      n -= need;
      i = j;
    } else {
      const minus = Math.floor(n / count);
      const remain = n % count;

      for (let k = i; k < j; k++) {
        works[k] -= minus;
      }

      for (let k = i; k < i + remain; k++) {
        works[k] -= 1;
      }

      n = 0;
    }
  }

  // 피로도 계산
  return works.reduce((sum, w) => sum + w * w, 0);
}

//힙방식
function solution(n, works) {
  // 총 작업량이 n 이하이면 모두 처리 가능 → 피로도 0
  const total = works.reduce((a, b) => a + b, 0);
  if (total <= n) return 0;

  // 최대 힙 구현
  const heap = new MaxHeap();
  works.forEach((work) => heap.push(work));

  for (let i = 0; i < n; i++) {
    let max = heap.pop(); // 가장 큰 작업량

    if (max > 0) {
      heap.push(max - 1);
    }
  }

  // 피로도 계산 (제곱합)
  let answer = 0;
  while (heap.size() > 0) {
    const val = heap.pop();
    answer += val * val;
  }

  return answer;
}

// 최대 힙 클래스
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return max;
  }

  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (this.heap[parent] >= this.heap[index]) break;

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
      let largest = index;

      if (left < length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }

      if (right < length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (largest === index) break;

      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      index = largest;
    }
  }
}

// bubbleUp bubbleDown 만들어보기
