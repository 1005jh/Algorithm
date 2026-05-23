function solution(n, times) {
  times.sort((a, b) => a - b);
  // console.log(times)
  let min = 1;
  let max = times[times.length - 1] * n;
  let answer = max;
  while (min < max) {
    let mid = Math.floor((min + max) / 2);
    let totaltime = 0;
    for (let t of times) {
      totaltime += Math.floor(mid / t);
    }
    if (n <= totaltime) {
      answer = mid;
      max = mid - 1;
    } else min = mid + 1;
  }

  return answer;
}
/* 테스트 6 실패 
다시 풀기

*/
