// 23:59 1439분
// 기본시간 이하면 기본요금, 초과한다면 기본요금 + ceil((총시간 - 기본시간)/ 단위시간) * 단위요금
// 오름차순 정렬해야함
function solution(fees, records) {
  var answer = [];
  const [basetime, basefare, unittime, unitfare] = fees;
  // console.log(basetime,basefare,unittime,unitfare)
  let inout = new Map();
  let total = new Map();
  const tomin = (t) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };
  for (let r of records) {
    const [time, carnum, history] = r.split(" ");
    const mintime = tomin(time);
    if (history === "IN") {
      inout.set(carnum, mintime);
    } else {
      const intime = inout.get(carnum);
      inout.delete(carnum);

      const totaltime = mintime - intime;
      total.set(carnum, totaltime);
    }
  }
  //23:59
  const last = 1439;
  for (let [car, intime] of inout) {
    const totaltime = last - intime;
    total.set(car, totaltime);
    // console.log("asdf",car,intime)
  }
  const arr = Array.from(total.keys()).sort((a, b) => a - b);
  // console.log(arr)
  for (let num of arr) {
    const time = total.get(num);
    // console.log(time)
    let cost = basefare;
    if (basetime < time) {
      // 기본요금 + ceil((총시간 - 기본시간)/ 단위시간) * 단위요금
      cost += Math.ceil((time - basetime) / unittime) * unitfare;
    }
    answer.push(cost);
  }
  return answer;
}
// 테스트 1 	실행한 결괏값 [12200,34400,5000]이 기댓값 [14600,34400,5000]과 다릅니다.
// 테스트 2 	실행한 결괏값 [0,0]이 기댓값 [0,591]과 다릅니다.
// 테스트 3 통과
// Todo : 차량이 여러번 출입할 경우 토탈이 덮어짐
// 23:59 1439분
// 기본시간 이하면 기본요금, 초과한다면 기본요금 + ceil((총시간 - 기본시간)/ 단위시간) * 단위요금
// 오름차순 정렬해야함
function solution(fees, records) {
  var answer = [];
  const [basetime, basefare, unittime, unitfare] = fees;
  // console.log(basetime,basefare,unittime,unitfare)
  let inout = new Map();
  let total = new Map();
  const tomin = (t) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };
  for (let r of records) {
    const [time, carnum, history] = r.split(" ");
    const mintime = tomin(time);
    if (history === "IN") {
      inout.set(carnum, mintime);
    } else {
      const intime = inout.get(carnum);
      inout.delete(carnum);

      const totaltime = mintime - intime;
      total.set(carnum, (total.get(carnum) || +0) + totaltime);
    }
  }
  //23:59
  const last = 1439;
  for (let [car, intime] of inout) {
    const totaltime = last - intime;
    total.set(car, (total.get(car) || 0) + totaltime);
    // console.log("asdf",car,intime)
  }
  const arr = Array.from(total.keys()).sort((a, b) => a - b);
  // console.log(arr)
  for (let num of arr) {
    const time = total.get(num);
    // console.log(time)
    let cost = basefare;
    if (basetime < time) {
      // 기본요금 + ceil((총시간 - 기본시간)/ 단위시간) * 단위요금
      cost += Math.ceil((time - basetime) / unittime) * unitfare;
    }
    answer.push(cost);
  }
  return answer;
}
