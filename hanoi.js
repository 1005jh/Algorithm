// 하나씩 옮겨야 함.
// 모든 기둥을 넣어서 저글링하듯이 메인기둥을 바꿔야함

function solution(n) {
  var answer = [];
  const hanoi = (m, start, end, sub) => {
    if (m === 1) {
      answer.push([start, end]);
      return;
    }
    hanoi(m - 1, start, sub, end);
    answer.push([start, end]);
    hanoi(m - 1, sub, end, start);
  };
  hanoi(n, 1, 3, 2);
  return answer;
}
