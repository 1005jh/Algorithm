// 테스트 1 실패 띠용
// 반복문 맥스치 설정의 문제
// queue2의 원소를 다 가지고 오고
// queue1의 원소를 다시 보내고만 생각을 했는데
// 그래도 맞추지 못할 경우를 생각해 상한선을 더 위에 둬야함
function solution(queue1, queue2) {
  var answer = 0;
  let sum1 = queue1.reduce((a, b) => a + b);
  let sum2 = queue2.reduce((a, b) => a + b);
  if ((sum1 + sum2) % 2 === 1) return -1;
  const half = (sum1 + sum2) / 2;
  const sumArr = [...queue1, ...queue2];
  let left = 0;
  let right = queue1.length;
  //반복문을 돌려서 높은쪽에서 낮은쪽으로
  while (answer <= queue1.length * 3) {
    if (sum1 === half) {
      return answer;
    }
    if (half < sum1) {
      sum1 -= sumArr[left];
      left++;
    } else {
      sum1 += sumArr[right];
      right++;
    }
    answer++;
  }
  return -1;
}
