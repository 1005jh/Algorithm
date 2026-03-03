// 123 223 333
// 1234 2234 3334 4444

function solution(n, left, right) {
  var answer = [];
  let arr = new Array(n * n).fill(0);
  // console.log(arr)
  for (let i = 0; i < n; i++) {
    let start = i * n;
    let end = start + n;
    for (let j = start; j < end; j++) {
      let val = j % n;
      if (val < i) {
        arr[j] = i + 1;
      } else {
        arr[j] = val + 1;
      }
    }
  }
  // console.log(arr)
  return arr.slice(left, right + 1);
}

// 런타임 에러 n이 10^7까지..
// todo : 반복문 한번으로 ?

// (0,0)은 1번만 덮임 → 1
// (0,1)은 2에서 덮임 → 2
// (0,2)는 3에서 덮임 → 3
// (1,0)은 2에서 덮임 → 2
// (1,1)은 2에서 마지막으로 덮임 → 2
// (2,0)은 3에서 덮임 → 3
// 그 칸이 포함되는 가장 큰 i는 max(행번호, 열번호)+1

// 규칙을 찾았어야 함****************************
function solution(n, left, right) {
  const result = [];

  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const col = i % n;
    result.push(Math.max(row, col) + 1);
  }

  return result;
}
