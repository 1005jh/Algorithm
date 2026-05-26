function solution(tickets) {
  var answer = [];
  let graph = {};
  for (const [f, t] of tickets) {
    if (!graph[f]) graph[f] = [];
    graph[f].push(t);
  }
  console.log("graph : ", graph);

  let result = [];
  const dfs = (e) => {
    const destination = graph[e];
    while (destination && 0 < destination.length) {
      const next = destination.pop();
      dfs(next);
    }
    result.unshift(e);
  };
  dfs("ICN");
  return result;
}
// 예제 2번 실패 순서가 하나 다름
// 알파벳순서 앞서는 경우 해줘야함 안해줬음

// 만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다
function solution(tickets) {
  var answer = [];
  let graph = {};
  for (const [f, t] of tickets) {
    if (!graph[f]) graph[f] = [];
    graph[f].push(t);
  }
  // console.log("graph : ",graph)
  for (const f in graph) {
    graph[f].sort((a, b) => b.localeCompare(a));
    // console.log("a,b",b.localeCompare(a)))
  }
  let result = [];
  const dfs = (e) => {
    const destination = graph[e];
    while (destination && 0 < destination.length) {
      const next = destination.pop();
      dfs(next);
    }
    result.unshift(e);
  };
  dfs("ICN");
  return result;
}
