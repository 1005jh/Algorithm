// 2W+1

function solution(n, stations, w) {
  var answer = 0;
  let current = 1;
  const cover = 2 * w + 1;

  for (const station of stations) {
    const left = station - w;
    if (current < left) {
      const length = left - current;
      answer += Math.ceil(length / cover);
    }
    current = station + w + 1;
  }
  if (current <= n) {
    const length = n - current + 1;
    answer += Math.ceil(length / cover);
  }

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  // console.log('Hello Javascript')

  return answer;
}
