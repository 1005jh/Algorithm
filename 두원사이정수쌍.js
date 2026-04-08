// 한쪽 구해서 *4
// 중심 0인 원 x^2 + y^2 <= r^2
// ??
// x축 기준 r까지 가면서 y 서칭
// y^2 <= r^2 - x^2
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
// 최대-최소+1
// 3,4,5,6 6-3+1
function solution(r1, r2) {
  var answer = 0;
  for (let i = 1; i <= r2; i++) {
    const max = Math.floor(Math.sqrt(r2 * r2 - i * i));
    // console.log(max)
    let min = 0;
    if (i < r1) {
      min = Math.ceil(Math.sqrt(r1 * r1 - i * i));
      // console.log(i,min,max)
    }
    // console.log(max,min,i)
    answer += max - min + 1;
  }
  // console.log(answer)
  return answer * 4;
}
// i =0 ~ 하게 되면 축값이 중복으로 들어감
