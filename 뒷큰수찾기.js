// 뒤에 있는 수가 앞의 수보다 클 때 입력

function solution(numbers) {
  var answer = new Array(numbers.length).fill(-1);
  let indexs = [];
  for (let i = 0; i < numbers.length; i++) {
    while (numbers[indexs[indexs.length - 1]] < numbers[i]) {
      const pop = indexs.pop();
      answer[pop] = numbers[i];
    }
    indexs.push(i);
  }
  return answer;
}
