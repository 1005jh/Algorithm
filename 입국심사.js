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
6, 9 → mid 범위(오버플로우) 문제

mid = (left + right) / 2 계산에서 left + right가 long 범위를 넘어 오버플로우 날 수 있음.


*/

function solution(n, times) {
  times.sort((a, b) => a - b);
  // console.log(times)
  const bigN = BigInt(n);
  const bigTimes = times.map((t) => BigInt(t));
  let min = 1n;
  let max = bigTimes[bigTimes.length - 1] * bigN;
  let answer = max;
  while (min <= max) {
    let mid = (min + max) / 2n;
    let totaltime = 0n;
    for (let t of bigTimes) {
      totaltime += mid / t;
    }
    if (bigN <= totaltime) {
      answer = mid;
      max = mid - 1n;
    } else min = mid + 1n;
  }

  return Number(answer);
}

테스트 6번의 실패는 while문에 있었다.
bigint를 쓰지 않아 생긴 문제가 아니라 while문에서의 min < max가 마지막까지 체크를 하지 못해 발생한 문제
function solution(n, times) {
  times.sort((a, b) => a - b);
  // console.log(times)
  let min = 1;
  let max = times[times.length - 1] * n;
  let answer = max;
  while (min <= max) {
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
이 풀이도 통과