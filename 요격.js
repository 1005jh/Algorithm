function solution(targets) {
  var answer = 0;
  targets.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let shot = -10;

  for (let [s, e] of targets) {
    if (shot <= s) {
      console.log(shot, s, e);
      shot = e;
      count++;
    }
  }
  return count;
}
