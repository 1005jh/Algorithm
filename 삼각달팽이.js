// 아래 - 오른쪽 - 위
// 1
// 2 9
// 3 10 8
// 4 5 6 7
// 방향 배열 만들기 - 반복하면서 이동 - 막히면 방향 변경
function solution(n) {
  var answer = [];
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Array(i + 1).fill(0));
  }
  // console.log(arr)
  let num = 0;
  let x = -1;
  let y = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i % 3 === 0) x++;
      else if (i % 3 === 1) y++;
      else {
        x--;
        y--;
      }
      num++;
      arr[x][y] = num;
      // console.log(arr, i, j, x, y)
    }
  }
  return arr.flat();
}
//  Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
//  (value, index) => ...
//  _ : 현재 값 (필요 없어서 _)
// i : 인덱스
// 정사각 배열 Array.from({length:n}, () => Array(n).fill(0))
// 삼각 배열 Array.from({length:n}, (_,i) => Array(i+1).fill(0))
자주 나오는 방향관련 문제
####방향배열----
const dx = [0, 1, 0, -1]; // → ↓ ← ↑
const dy = [1, 0, -1, 0];
####이동----
let dir = 0;

for (let i = 1; i <= n*n; i++) {
  arr[x][y] = i;

  let nx = x + dx[dir];
  let ny = y + dy[dir];

  if (범위 밖 || 이미 채움) {
    dir = (dir + 1) % 4;
  }

  x += dx[dir];
  y += dy[dir];
}