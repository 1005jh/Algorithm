// 투포인터
function solution(topping) {
  var answer = 0;
  const left = {};
  const right = {};
  for (let i = 0; i < topping.length; i++) {
    if (right[topping[i]]) {
      right[topping[i]]++;
    } else {
      right[topping[i]] = 1;
    }
  }
  let lefttype = 0;
  let righttype = Object.keys(right).length;
  for (let i = 0; i < topping.length; i++) {
    const type = topping[i];

    if (!left[type]) {
      lefttype++;
      left[type] = 1;
    } else {
      left[type]++;
    }

    right[type]--;
    if (right[type] === 0) {
      righttype--;
    }
    if (lefttype === righttype) {
      answer++;
    }
  }
  return answer;
}
