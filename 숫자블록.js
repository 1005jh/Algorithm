// 약수 구하기
// divisor
// 각 값이 가장 큰 약수를 사용해야함
// 소수는 무조건 1
// 1-index
// 10,000,000 이하의 수
// 효율적으로 약수를 찾으려면 약수는 대칭성이 있기에 제곱근까지 점검하면 된다
function solution(begin, end) {
  var answer = [];
  for (let i = begin; i <= end; i++) {
    if (i === 1) {
      answer.push(0);
      continue;
    }
    let divisor = 1;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j <= 10000000) {
          divisor = i / j;
          break;
        }
        divisor = j;
      }
    }
    answer.push(divisor);
  }
  return answer;
}

// 효율성 테스트 1~4 실패 18줄 = 추가
