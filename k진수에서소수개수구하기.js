// k진법으로 보았을 때가 아닌, 10진법으로 보았을 때 소수여야 한다는 점에 주의합니다.
// 0기준 split
// P는 각 자릿수에 0을 포함하지 않는 소수
// 중복되어도 따로 카운팅해야함

function solution(n, k) {
  var answer = 0;
  const convert = n.toString(k);
  // console.log(convert)
  const splitnum = convert.split("0");
  // console.log(splitnum)
  for (let num of splitnum) {
    if (num === "") continue;
    if (isPrime(Number(num))) answer++;
  }
  return answer;
}
function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
