// 빨리 나간순으로 정렬
// 나간자리 기준 서치

function solution(routes) {
  var answer = 0;
  routes.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let position = -Infinity;

  for (let [s, e] of routes) {
    if (position < s) {
      count++;
      position = e;
    }
  }
  return count;
}
