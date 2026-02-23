// 테스트 5,6,8,9 실패

function solution(storey) {
  var answer = 0;
  // console.log(115%10)
  // console.log(Math.floor((115/10)%10))
  while (0 < storey) {
    let onesDigit = storey % 10;
    if (5 <= onesDigit) {
      answer += 10 - onesDigit;
      storey += 10;
    } else if (onesDigit < 5) {
      answer += onesDigit;
    }
    console.log("1", storey, answer);
    storey = Math.floor(storey / 10);
    console.log("2", storey, answer);
  }
  return answer;
}
// todo: 5일때가 문제. 15일 시 5를 내리고 1을 내리면 6번. 위 코드대로면 7번 분할을 해야함
// 65면 5에서 5사용, 6에서 10까지가 가까우니 4 사용 총 9
// 45면 5에서 5사용, 4에서 0까지가 가까우니 4 사용 총 9

function solution(storey) {
  var answer = 0;
  // console.log(115%10)
  // console.log(Math.floor((115/10)%10))
  while (0 < storey) {
    let onesDigit = storey % 10;
    let tensDigit = Math.floor((storey / 10) % 10);
    if (5 < onesDigit) {
      answer += 10 - onesDigit;
      storey += 10;
    } else if (onesDigit < 5) {
      answer += onesDigit;
    } else {
      // ===5 일경우
      if (5 <= tensDigit) {
        answer += 5;
        storey += 10;
      } else {
        answer += 5;
      }
    }
    // console.log("1",storey, answer)
    storey = Math.floor(storey / 10);
    // console.log("2",storey, answer)
  }
  return answer;
}
