// 순서대로(1,2,3,4,5) 들어오는 택배중 실어야 하는 순서가 아니면 보조 컨테이너벨트로 뺌
// 컨테이너벨트는 순서대로 오고 보조 컨테이너벨트는 후입선출
// 원하는 물품이 올때까지 보조에 넣기 / 넣은 후 메인,보조 서치 / 둘다 아니면 종료

function solution(order) {
  var answer = 0;
  let second = [];
  let current = 1;
  for (let i = 0; i < order.length; i++) {
    while (current <= order.length && current < order[i]) {
      second.push(current);
      current++;
    }
    // console.log(second, i, current)
    if (current === order[i]) {
      current++;
      answer++;
    } else if (0 < second.length && second[second.length - 1] === order[i]) {
      second.pop();
      answer++;
    } else break;
  }
  return answer;
}
