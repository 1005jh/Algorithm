// 시작 벽 목표점
// 있는 그대로 길이구하기 하니까 빡셈
// 직선으로 만들기

function solution(m, n, startX, startY, balls) {
  var answer = [];
  for (const [x, y] of balls) {
    let candidates = [];

    if (!(startY === y && startX > x)) {
      const dx = startX - -x;
      const dy = startY - y;
      candidates.push(dx * dx + dy * dy);
    }

    if (!(startY === y && startX < x)) {
      const dx = startX - (2 * m - x);
      const dy = startY - y;
      candidates.push(dx * dx + dy * dy);
    }

    if (!(startX === x && startY > y)) {
      const dx = startX - x;
      const dy = startY - -y;
      candidates.push(dx * dx + dy * dy);
    }

    if (!(startX === x && startY < y)) {
      const dx = startX - x;
      const dy = startY - (2 * n - y);
      candidates.push(dx * dx + dy * dy);
    }

    answer.push(Math.min(...candidates));
  }
  return answer;
}
