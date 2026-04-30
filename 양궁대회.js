// n을 분배해서 가장 크게 이기는 경우를 리턴
// 이기려면 어피치+1만큼 쏴야함
// 라이언이 가장 큰 점수 차이로 우승할 수 있는 방법이 여러 가지 일 경우, 가장 낮은 점수를 더 많이 맞힌 경우를 return 해주세요.
function solution(n, info) {
  var answer = [-1];
  let max = -1;
  const valid = (a, b) => {
    for (let i = 10; i >= 0; i--) {
      if (a[i] !== b[i]) {
        if (a[i] > b[i]) return true;
        else return false;
      }
    }
    return false;
  };
  const dfs = (id, n, lionArr) => {
    if (id === 11) {
      lionArr[10] += n;
      let apeach = 0;
      let lion = 0;
      for (let i = 0; i < 11; i++) {
        if (info[i] === 0 && lionArr[i] === 0) continue;
        if (lionArr[i] <= info[i]) apeach += 10 - i;
        else lion += 10 - i;
      }
      let score = lion - apeach;
      if (score > 0) {
        if (max < score) {
          max = score;
          answer = [...lionArr];
        } else if (max === score) {
          // 여기서 가장낮은점수 검증
          // console.log("1")
          if (valid(lionArr, answer)) {
            answer = [...lionArr];
          }
        }
      }
      lionArr[10] -= n;
      return;
    }
    let needArrow = info[id] + 1;
    if (needArrow <= n) {
      lionArr[id] = needArrow;
      dfs(id + 1, n - needArrow, lionArr);
    }
    dfs(id + 1, n, lionArr);
  };

  dfs(0, n, Array(11).fill(0));
  return answer;
}
// n 제한으로 안됨
//todo 아
// n을 분배해서 가장 크게 이기는 경우를 리턴
// 이기려면 어피치+1만큼 쏴야함
// 라이언이 가장 큰 점수 차이로 우승할 수 있는 방법이 여러 가지 일 경우, 가장 낮은 점수를 더 많이 맞힌 경우를 return 해주세요.
function solution(n, info) {
  var answer = [-1];
  let max = -1;
  const valid = (a, b) => {
    for (let i = 10; i >= 0; i--) {
      if (a[i] !== b[i]) {
        if (a[i] > b[i]) return true;
        else return false;
      }
    }
    return false;
  };
  const dfs = (id, n, lionArr) => {
    if (id === 11) {
      lionArr[10] += n;
      let apeach = 0;
      let lion = 0;
      for (let i = 0; i < 11; i++) {
        if (info[i] === 0 && lionArr[i] === 0) continue;
        if (lionArr[i] <= info[i]) apeach += 10 - i;
        else lion += 10 - i;
      }
      let score = lion - apeach;
      if (score > 0) {
        if (max < score) {
          max = score;
          answer = [...lionArr];
        } else if (max === score) {
          // 여기서 가장낮은점수 검증
          // console.log("1")
          if (valid(lionArr, answer)) {
            answer = [...lionArr];
          }
        }
      }
      lionArr[10] -= n;
      return;
    }
    let needArrow = info[id] + 1;
    if (needArrow <= n) {
      lionArr[id] = needArrow;
      dfs(id + 1, n - needArrow, lionArr);
      lionArr[id] = 0;
    }
    dfs(id + 1, n, lionArr);
  };

  dfs(0, n, Array(11).fill(0));
  return answer;
}
