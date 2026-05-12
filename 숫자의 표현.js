function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;

      if (sum === n) {
        answer++;
        break;
      } else if (sum > n) {
        break;
      }
    }
  }
  return answer;
}
// 테스트 2,3 효율성 시간 초과
// 자연수 n을 연속된 자연수의 합으로 표현하는 방법의 수는 n의 약수 중 홀수의 개수와 같다고 함

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 !== 0) {
      // i가 n의 약수이면서 동시에 홀수인지 확인
      answer++;
    }
  }

  return answer;
}
