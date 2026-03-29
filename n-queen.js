// 대각선은 바뀐 자릿값의 차이가 같다
function solution(n) {
  var answer = 0;
  const col = new Array(n).fill(0);
  const valid = (row) => {
    for (let i = 0; i < row; i++) {
      if (col[i] === col[row]) return false;
      if (Math.abs(col[row] - col[i]) === row - i) return false;
    }
    return true;
  };
  const dfs = (row) => {
    console.log(row);
    if (row === n) {
      answer++;
      return;
    }
    for (let i = 0; i < n; i++) {
      col[row] = i;
      if (valid(row)) {
        dfs(row + 1);
      }
    }
  };
  dfs(0);
  return answer;
}

// 다시풀기
// 백트래킹
