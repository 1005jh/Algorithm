// 1 or 2 이동가능
// 1234567 나눠야함 ?
// 5 => (11111)(2111)(1211)(1121)(1112)(221)(212)(122) 8
// 4 => (1111)(121)(211)(112)(22) 5
// 3 => (12)(111)(21) 3
// 2 => (11)(2) 2
// n = n-1 + n-2 ?
function solution(n) {
  var answer = 0;
  const arr = Array(n + 1).fill(0);
  // console.log(arr)
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
    // console.log(i, arr[i])
  }
  return arr[n];
}
