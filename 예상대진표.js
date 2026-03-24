// 1,2 ->1
// 3,4 ->2
// 5,6 ->3
// Math.ceil(번호/2)
// 참가자 수 n, 참가자 a, 경쟁자 b 몇번째라운드에 만나는지

function solution(n, a, b) {
  var answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");

  return answer;
}
