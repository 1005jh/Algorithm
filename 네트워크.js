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
function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            answer++;
            const queue = [i];
            visited[i] = true;
            while (queue.length > 0) {
                const current = queue.shift();
                for (let j = 0; j < n; j++) {
                    if (j !== current && computers[current][j] === 1 && !visited[j]) {
                        queue.push(j);
                        visited[j] = true;
                    }
                }
            }
        }
    }
    return answer;
}