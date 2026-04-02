// 1, 나머지 경우의 수
// 2, 나머지 경우의 수
// n-1 * n
// 1 2 3 4 5 사전순 나열
// k 값으로 접근 ?

function solution(n, k) {
  var answer = [];
  const numbers = [];
  for (let i = 0; i <= n; i++) {
    numbers.push(i);
  }
  for (let i = n; 0 < i; i--) {
    const rest = (n - 1 || 1) * (n - 2 || 1);
    // console.log(rest)
    const idx = Math.ceil(k / rest);
    // console.log(rest , idx, numbers)
    answer.push(numbers[idx]);
    numbers.splice(idx, 1);

    k = k % rest;
  }
  return answer;
}
// 실패함
//todo 나머지 경우의 수를 잘못계산함 팩토리얼인데 3에만 꽂혀있었음
function solution(n, k) {
  var answer = [];
  const numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  const factorial = [1];
  for (let i = 1; i <= n; i++) {
    factorial[i] = factorial[i - 1] * i;
  }
  k--;
  for (let i = n; 0 < i; i--) {
    const rest = factorial[i - 1];
    // console.log(rest)
    const idx = Math.floor(k / rest);
    // console.log(rest , idx, numbers)
    answer.push(numbers[idx]);
    numbers.splice(idx, 1);

    k = k % rest;
  }
  return answer;
}
