const scores = [
  [85, 90],
  [65, 67],
  [88, 87],
  [88, 87],
  [73, 81],
  [65, 89],
  [99, 100],
  [80, 94],
];
const scores2 = [
  [85, 90],
  [91, 87],
  [88, 87],
];
const result = [4, 8, 2, 3, 6, 7, 1, 5];
const result2 = [2, 1, 3];
function solution(scores) {
  const answer = [];
  const total = Array(answer.length).fill(0);
  const scoresMap = scores.map((a, b) => a + b);
  for (let i in scores) {
    const newScores = scores[i].reduce((a, c) => a + c, 0);
    answer.push([i, scores[i]]);
  }
  return answer;
}
console.log(solution(scores));

const scoresMap = scores.map((a) => a.map((x, y) => x + y));
console.log(scoresMap);
