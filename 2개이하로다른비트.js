// x보다 커야함
// 비트가 최대 2개 다른 수 중 작아야함
// 짝수면 +1일때가 가장 작음
// 홀수면 ?
// 홀수일 경우 첫0과 다음수 변경

function solution(numbers) {
  var answer = [];
  for (let num of numbers) {
    if (num % 2 === 0) {
      answer.push(num + 1);
    } else {
      // let binary = String(num.toString(2))
      let binary = "0" + num.toString(2);
      // console.log(num,binary)
      // console.log(binary.lastIndexOf(1))
      let idx = binary.lastIndexOf(0);
      // if (idx === -1 ) idx = 0
      let result = binary.slice(0, idx) + "10" + binary.slice(idx + 2);
      // console.log(parseInt(result,2))
      answer.push(parseInt(result, 2));
    }
  }
  return answer;
}

앞의 000...은 생략된 것으로 생각을 해줘야 함 