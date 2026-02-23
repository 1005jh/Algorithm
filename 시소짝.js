// 2:2,2:3,2:4,3:4  1:1,1:2,2:3,3:4

function solution(weights) {
  var answer = 0;
  let list = {};
  weights.sort((a, b) => a - b);
  for (let i of weights) {
    if (list[i]) {
      answer++;
    } else if (list[i / 2]) {
      answer++;
    } else if (list[(i * 2) / 3]) {
      answer++;
    } else if (list[(i * 3) / 4]) {
      answer++;
    }
    list[i] = (list[i] || 0) + 1;
    console.log(i, list, answer);
  }
  return answer;
}

// todo: 한 사람이 두개 조건 만족경우를 체크 못함 조건문 분리
function solution(weights) {
  var answer = 0;
  let list = {};
  weights.sort((a, b) => a - b);
  for (let i of weights) {
    if (list[i]) answer++;
    if (list[i / 2]) answer++;
    if (list[(i * 2) / 3]) answer++;
    if (list[(i * 3) / 4]) answer++;
    list[i] = (list[i] || 0) + 1;
    // console.log(i,list, answer )
  }
  return answer;
}

// todo: 아 같은 몸무게가 둘일 때 두개조건을 만족하면 4가 집계되어야함 100,100, 200,300 일 시
function solution(weights) {
  var answer = 0;
  let list = {};
  weights.sort((a, b) => a - b);
  for (let i of weights) {
    if (list[i]) answer += list[i];
    if (list[i / 2]) answer += list[i / 2];
    if (list[(i * 2) / 3]) answer += list[(i * 2) / 3];
    if (list[(i * 3) / 4]) answer += list[(i * 3) / 4];
    list[i] = (list[i] || 0) + 1;
    // console.log(i,list, answer )
  }
  return answer;
}
