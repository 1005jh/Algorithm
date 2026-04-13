// x = a*k, y = b*k
// 원점 ~ d => 원
// (a*k)^2 + (b*k)^2 <= d^2
// 두 원 사이의 정수 쌍 문제랑 비슷한듯
// x값 증가시키면서 가능한 y값 구하기 => k 단위로 증가
// a값에 대한 b최댓값

function solution(k, d) {
  var answer = 0;
  for (let a = 0; a <= d; a = a + k) {
    // console.log(a)
    let maxy = Math.sqrt(d * d - a * a);
    let maxb = Math.floor(maxy / k);
    // console.log(maxb)
    answer += maxb + 1;
  }
  return answer;
}
