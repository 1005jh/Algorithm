// 결국 경우의 수 더하기
// n+1까지 만들어서 진행 0~n

function solution(n, money) {
  var answer = 0;
  const arr = new Array(n + 1).fill(0);
  arr[0] = 1;
  for (let item of money) {
    for (let i = item; i <= n; i++) {
      arr[i] += arr[i - item] % 1000000007;
    }
  }
  return arr[n];
}
