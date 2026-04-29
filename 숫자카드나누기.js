// 각 배열의 최대공약수 구하기
// https://www.youtube.com/watch?v=VvHHj3x9oZg&t=53s
// 유클리드 호제법
// function gcd(a, b) {
//     while (b !== 0) {
//         let r = a % b;
//         a = b;
//         b = r;
//     }
//     return a;
// }
// 상대 배열이 나눠지지 않는 최대공약수를 구해야함
// 배열의 최대공약수 반복문으로 하면 더러워짐
// 1 유클리드호제법 2 배열적용 3 상대배열검증

function solution(arrayA, arrayB) {
  var answer = 0;
  const gcd = (a, b) => {
    while (b !== 0) {
      let r = a % b;
      a = b;
      b = r;
    }
    return a;
  };
  const arrgcd = (arr) => {
    return arr.reduce((a, c) => gcd(a, c));
  };
  const valid = (gcd, arr) => {
    for (let n of arr) {
      if (n % gcd === 0) return false;
    }
    return true;
  };
  let gcdA = arrgcd(arrayA);
  let gcdB = arrgcd(arrayB);
  if (valid(gcdA, arrayB)) answer = Math.max(answer, gcdA);
  if (valid(gcdB, arrayA)) answer = Math.max(answer, gcdB);
  return answer;
}
