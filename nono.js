const scores1 = [
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
const result1 = [4, 8, 2, 3, 6, 7, 1, 5];
const result2 = [2, 1, 3];

function solution(scores) {
  const objArr = [];
  let answer = [];
  // 어려운 문제 번호
  let difficult = 0;
  const totalAvgScore = scores.reduce((acc, curr) => {
    if (acc.length === 0) {
      acc = [curr[0], curr[1]];
      return acc;
    }
    acc[0] += curr[0];
    acc[1] += curr[1];
    return acc;
  }, []);
  if (totalAvgScore[0] >= totalAvgScore[1]) {
    difficult = 0;
  } else {
    difficult = 1;
  }
  // 어려운 문제 번호 끝

  // 객체로 변환
  scores.map((item, index) => {
    objArr.push({
      id: index + 1,
      highScoreTest: item[0] >= item[1] ? 0 : 1,
      avgScore: (item[0] + item[1]) / 2,
    });
  });
  // 객체로 변환
  objArr.sort((a, b) => {
    if (a.avgScore > b.avgScore) {
      return 1;
    } else if (a.avgScore < b.avgScore) {
      return -1;
    } else {
      if (a.highScoreTest === difficult) {
        return -1;
      } else if (b.highScoreTest === difficult) {
        return 1;
      } else {
        if (a.id > b.id) {
          return -1;
        } else {
          return 1;
        }
      }
    }
  });
  objArr.map((item, index) => {
    item["rank"] = objArr.length - index;
  });
  objArr.map((item, index) => {
    answer[item.id] = item.rank;
  });
  return answer.filter((v) => v !== undefined);
}

console.log(solution(scores1));
