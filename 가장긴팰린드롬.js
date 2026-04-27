// 가운데를 기준으로 양쪽이 같음
// 중심부터 확장

function solution(s) {
  var answer = 0;

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  // console.log('Hello Javascript')
  const func = (l, r) => {
    while (0 <= l && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return r - l - 1; // 한단계 더 나아갔기 때문에 -1 해줘야함
  };
  for (let i = 0; i < s.length; i++) {
    const leng1 = func(i, i);
    const leng2 = func(i, i + 1);

    let max = Math.max(leng1, leng2);
    answer = Math.max(answer, max);
  }

  return answer;
}
