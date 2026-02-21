// 제거로직을 너무 못짜서 도움을 받음.
function solution(want, number, discount) {
  let answer = 0;

  const wantMap = {};
  for (let i = 0; i < want.length; i++) {
    wantMap[want[i]] = number[i];
  }

  const windowMap = {};
  let hit = 0;

  for (let i = 0; i < 10; i++) {
    const item = discount[i];
    windowMap[item] = (windowMap[item] || 0) + 1;
  }

  for (let key in wantMap) {
    if (windowMap[key] === wantMap[key]) hit++;
  }
  if (hit === want.length) answer++;

  for (let i = 10; i < discount.length; i++) {
    const removeItem = discount[i - 10];
    const addItem = discount[i];

    if (wantMap[removeItem] !== undefined) {
      if (windowMap[removeItem] === wantMap[removeItem]) hit--;
    }
    windowMap[removeItem]--;
    if (wantMap[removeItem] !== undefined) {
      if (windowMap[removeItem] === wantMap[removeItem]) hit++;
    }

    windowMap[addItem] = (windowMap[addItem] || 0) + 1;
    if (wantMap[addItem] !== undefined) {
      if (windowMap[addItem] === wantMap[addItem]) hit++;
      else if (windowMap[addItem] === wantMap[addItem] + 1) hit--;
    }

    if (hit === want.length) answer++;
  }

  return answer;
}

//머리가 너무 비벼졌다
function solution(want, number, discount) {
  var answer = 0;
  const wantObj = {};
  for (let i = 0; i < want.length; i++) {
    wantObj[want[i]] = number[i];
  }
  const slideObj = {};

  for (let i = 0; i < 10; i++) {
    if (!slideObj[discount[i]]) {
      slideObj[discount[i]] = 1;
    } else {
      slideObj[discount[i]]++;
    }
  }
  let hit = 0;
  for (let i in wantObj) {
    if (slideObj[i] === wantObj[i]) hit++;
  }
  if (hit === want.length) answer++;
  for (let i = 10; i < discount.length; i++) {
    if (wantObj[discount[i - 10]] !== undefined) {
      if (slideObj[discount[i - 10]] === wantObj[discount[i - 10]]) hit--;
    }
    slideObj[discount[i - 10]]--;
    if (wantObj[discount[i - 10]] !== undefined) {
      if (slideObj[discount[i - 10]] === wantObj[discount[i - 10]]) hit++;
    }
    if (!slideObj[discount[i]]) {
      slideObj[discount[i]] = 1;
    } else {
      slideObj[discount[i]]++;
    }
    if (wantObj[discount[i]] !== undefined) {
      if (slideObj[discount[i]] === wantObj[discount[i]]) hit++;
      else if (slideObj[discount[i]] === wantObj[discount[i]] + 1) hit--;
    }

    if (hit === want.length) answer++;
  }
  return answer;
}
