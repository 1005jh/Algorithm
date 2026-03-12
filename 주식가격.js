function solution(prices) {
  const answer = Array(prices.length).fill(0);
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[i - 1]] > prices[i]) {
      const index = stack.pop();
      answer[index] = i - index;
    }
    stack.push(i);
  }
  while (stack.length > 0) {
    const index = stack.pop();
    answer[index] = prices.length - 1 - index;
  }

  return answer;
}
// todo 길이가 다르기 때문에 조건문 수정해야함

function solution(prices) {
  const answer = Array(prices.length).fill(0);
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      const index = stack.pop();
      answer[index] = i - index;
    }
    stack.push(i);
  }
  while (stack.length > 0) {
    const index = stack.pop();
    answer[index] = prices.length - 1 - index;
  }

  return answer;
}
