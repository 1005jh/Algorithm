function solution(n, computers) {
  var answer = 0;
  const visited = new Array(n).fill(false);
  const dfs = (idx) => {
    visited[idx] = true;
    for (let i = 0; i < n; i++) {
      if (i !== idx && computers[idx][i] === 1 && !visited[i]) dfs(i);
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
}
