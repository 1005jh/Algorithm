function solution(diffs, times, limit) {
  let min = 1;
  let max = 100000;
  let answer = max;
  function possible(level) {
    let totalTime = 0;
    for (let i = 0; i < diffs.length; i++) {
      if (diffs[i] <= level) {
        totalTime += times[i];
      } else {
        const mistakes = diffs[i] - level;
        const prev = times[i - 1];
        const cur = times[i];
        totalTime += mistakes * (cur + prev) + cur;
      }
      if (totalTime > limit) return false;
    }

    return totalTime <= limit;
  }

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (possible(mid)) {
      answer = mid;
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return answer;
}
