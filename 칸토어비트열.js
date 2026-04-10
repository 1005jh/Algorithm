// 1 = 11011 , 0 = 00000
// n번째 비트열 -> n-1의 각 문자마다 위로 치환
// 11011 11011 00000 11011 11011
// 아 첫번째는 1, 두번째는 1 -> 11011 , 세번째는 11011 -> 위에꺼
// 재귀
// 0 - 1
//  1-5
// 2-25 5제곱
// n번째는 n-1의 덩어리가 가운데 0뭉치를 기준으로 양쪽에 두개
// n-1 n-1 0뭉치 n-1 n-1
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
function solution(n, l, r) {
  var answer = 0;
  const cantor = (n, e) => {
    if (n === 0) return 0;
    const block = Math.pow(5, n - 1);
    let result = 0;
    for (let i = 0; i < 5; i++) {
      const start = i * block + 1;
      const end = (i + 1) * block;

      if (e < start) break;
      if (i === 2) continue;
      const nexte = Math.min(e, end) - start + 1;
      if (nexte === block) {
        result += Math.pow(4, n - 1);
      } else {
        result += cantor(n - 1, nexte);
      }
    }
    return result;
  };
  return cantor(n, r) - cantor(n, l - 1);
}
