// 동시에 작업 시작이지만 처리시간이 다름
// 마지막 작업을 처리하는 코어번호 구하기
// 코어의 처리시간 기준으로 접근하기

function solution(n, cores) {
  var answer = 0;
  if (n <= cores.length) return n;
  let left = 0;
  let right = Math.max(...cores) * n;
  let currentTime = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let done = cores.length;
    for (let core of cores) {
      done += Math.floor(mid / core);
    }

    if (done >= n) {
      currentTime = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  //todo 다시 해보기
  let before = cores.length;

  for (let core of cores) {
    before += Math.floor((currentTime - 1) / core);
  }
  for (let i = 0; i < cores.length; i++) {
    if (currentTime % cores[i] === 0) {
      before++;
      if (before === n) {
        return i + 1;
      }
    }
  }
}
처리시간을 기준으로 접근해야하는거라 접근을 잘못하게 됐던 문제
마지막 부분은 다시 설계해보기