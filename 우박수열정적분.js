// n => k가 1 될때까지의 횟수
// a, -b => x= a ~ n-b까지
// 면적 구하기 -> (윗변+아랫변) * 높이 / 2
// 우선 1이 될때까지 진행 5
// x => 1씩 사다리꼴 면적
// 10.5 12 6 3 1.5
// [0,0] => 전체 면적
// 1. k가 1이 될때까지 반복
// 2. x 1씩 증가시키며 면적값
// 3. 시작점이 끝점보다 커서 유효하지 않은 구간 처리
// 4. b구간합 - a 구간합
function solution(k, ranges) {
  var answer = [];
  let sequence = [k];
  while (k !== 1) {
    if (k % 2 === 0) k = k / 2;
    else {
      k = k * 3 + 1;
    }
    sequence.push(k);
  }
  // console.log(sequence)
  let areas = [];
  for (let i = 0; i < sequence.length - 1; i++) {
    const area = (sequence[i] + sequence[i + 1]) / 2;
    areas.push(area);
  }
  // console.log(areas)
  let sum = [0];
  for (let i = 0; i < areas.length; i++) {
    sum.push(sum[i] + areas[i]);
  }
  // console.log(sum)
  // 구간별
  for (const [a, b] of ranges) {
    const newb = sequence.length - 1 + b;
    if (newb < a) answer.push(-1);
    else {
      const val = sum[newb] - sum[a];
      answer.push(val);
    }
  }
  return answer;
}
