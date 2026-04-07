// 새 과제 시간이면 진행중 과제는 중단
// 진행중 과제 끝 -> 새 과제
// 진행중 과제 끝 -> 새 과제 x -> 멈춘과제
// 멈춘 과제 여러개일 시 가장 최근 멈춘 과제 우선 -> stack
// 만약, 과제를 끝낸 시각에 새로 시작해야 되는 과제와 잠시 멈춰둔 과제가 모두 있다면, 새로 시작해야 하는 과제부터 진행합니다. 남은 시간이 없을 때를 말하는거. 화날뻔.
// 과제 끝난 순서대로 배열행
// plans = [name,start,playtime]
function solution(plans) {
  plans = plans.map(([name, start, playtime]) => {
    const [h, m] = start.split(":").map(Number);
    return [name, h * 60 + m, Number(playtime)];
  });
  plans.sort((a, b) => a[1] - b[1]);
  // console.log(plans)
  let stack = [];
  var answer = [];
  for (let i = 0; i < plans.length; i++) {
    const [name, start, playtime] = plans[i];
    const nstart = i < plans.length - 1 ? plans[i + 1][1] : Infinity;
    // console.log(nstart)
    let currentt = start;
    let remainingt = playtime;
    if (currentt + remainingt <= nstart) {
      answer.push(name);
      let freet = nstart - (currentt + remainingt);
      console.log(name, stack, freet);
      while (stack.length && freet > 0) {
        const [stopname, stoptime] = stack.pop();
        if (stoptime <= freet) {
          freet -= stoptime;
          answer.push(stopname);
        } else {
          stack.push([stopname, stoptime - freet]);
          freet = 0;
        }
      }
    } else {
      stack.push([name, currentt + remainingt - nstart]);
    }
  }
  return answer;
}
