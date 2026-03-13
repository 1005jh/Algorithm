// (bridge_length대) < weight 일 시 다리에 올리기
// queue로 저장하기
// 앞에꺼 꺼내면서 비교하고 다시 채우기 반복

function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let queue = Array(bridge_length).fill(0);
  let currentWeight = 0;
  while (0 < queue.length) {
    answer++;
    currentWeight -= queue.shift();
    if (0 < truck_weights.length) {
      if (currentWeight + truck_weights[0] <= weight) {
        const target = truck_weights.shift();
        queue.push(target);
        currentWeight += target;
      } else queue.push(0);
    }
  }
  return answer;
}
// 테스트 1번 실패 수정

//
