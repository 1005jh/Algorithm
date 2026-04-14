// 방문 여부 체크
// 모든 상자 돌면서 체크하고
// 2번그룹 시작 시 방문하지 않은 상자에서 시작
// 1-index 주의

function solution(cards) {
  // var answer = 1;
  let answer = [];
  const visited = new Array(cards.length).fill(false);
  // console.log(visited)
  for (let i = 0; i < cards.length; i++) {
    if (visited[i]) continue;
    let target = i;
    let count = 0;
    while (!visited[target]) {
      visited[target] = true;
      target = cards[target] - 1;
      count++;
    }
    // console.log(count)
    // answer *= count
    answer.push(count);
  }
  if (answer.length < 2) return 0;
  answer.sort((a, b) => b - a);
  return answer[0] * answer[1];
}
