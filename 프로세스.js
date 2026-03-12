// 맨 앞 프로세스를 꺼낸다
// 큐에 우선순위가 높은게 있다면 다시 뒤에 넣는다
// 없으면 실행
// location에 해당하는 프로세스가 몇번째로 실행되는지 찾기

function solution(priorities, location) {
  var answer = 0;
  const queue = priorities.map((e, i) => ({
    e,
    i,
  }));
  // console.log(queue)
  while (0 < queue.length) {
    const current = queue.shift();
    let start = false;
    for (let i = 0; i < queue.length; i++) {
      if (current.e < queue[i].e) {
        start = true;
        break;
      }
    }
    if (start) {
      queue.push(current);
    } else {
      answer++;
      if (current.i === location) return answer;
    }
  }
  return answer;
}

queue.some((p) => p.priority > current.priority);
queue.find((p) => p.priority > current.priority) !== undefined;
queue.filter((p) => p.priority > current.priority).length > 0;
