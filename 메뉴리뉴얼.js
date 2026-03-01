// 오름차순 정렬하기
// course 길이만큼 조합맞추기
// 최소 두번이상 주문된 조합
// 배열에 담아 사전 순으로 오름차순 정렬

function solution(orders, course) {
  var answer = [];
  const getcombi = (arr, num) => {
    if (num === 1) return arr.map((v) => [v]);
    const results = [];
    arr.forEach((e, i, a) => {
      // console.log(e,i,a)
      const rest = a.slice(i + 1);
      const combinations = getcombi(rest, num - 1);
      const attached = combinations.map((v) => [e, ...v]);
      results.push(...attached);
    });
    // console.log("!@#",results)
    return results;
  };
  for (let i = 0; i < course.length; i++) {
    let list = new Map();
    let count = 0;
    for (let order of orders) {
      if (order.length < course[i]) continue;
      const sortorder = order.split("").sort();
      // console.log(sortorder)
      const combination = getcombi(sortorder, course[i]);
      for (let c of combination) {
        const key = c.join("");
        list.set(key, (list.get(key) || 0) + 1);
        count = Math.max(count, list.get(key));
      }
    }
    if (2 <= count) {
      for (let [key, value] of list.entries()) {
        if (value === count) {
          answer.push(key);
        }
      }
    }
  }
  return answer.sort();
}
