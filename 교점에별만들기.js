// https://wjs7347.tistory.com/17
// Ax + By + E = 0
// Cx + Dy + F = 0
// 교점 공식 분모 => AD - BC ㅇ
// x =(BF - ED) / 분모 ㅇ
// y = (EC - AF) / 분모 ㅇ
// 분모 === 0 교점이 없음. 평행이나 동일 ㅇ
// 정수좌표만 기록 ㅇ
// Ax + By + C = 0 line => [A,B,C] 형태 ㅇ
// 별을 포함하는 최소한의 크기 => 범위 구해야함 ㅇ
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
function solution(line) {
  var answer = [];
  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      const [a, b, c] = line[i];
      const [d, e, f] = line[j];
      const denominator = a * e - b * d;
      if (denominator === 0) continue;

      const x = (b * f - c * e) / denominator;
      const y = (c * d - a * f) / denominator;
      // console.log(x,y)
      if (Number.isInteger(x) && Number.isInteger(y)) answer.push([x, y]);
    }
  }
  // console.log(answer)
  let minx = Infinity;
  let maxx = -Infinity;
  let miny = Infinity;
  let maxy = -Infinity;
  for (const [a, b] of answer) {
    minx = Math.min(minx, a);
    maxx = Math.max(maxx, a);
    miny = Math.min(miny, b);
    maxy = Math.max(maxy, b);
  }
  // console.log(minx,miny,maxx,maxy)	-4 -4 4 4
  // 어떻게 기록하지
  const xline = maxx - minx + 1;
  const yline = maxy - miny + 1;
  // console.log(xline,yline)
  let board = Array.from({ length: yline }, () => Array(xline).fill("."));
  // console.log(board) 좌표 증가방향을 배열이랑 맞춰야함
  // (0,4),(-4,-4),(4,-4),(4,1),(-4,1)
  for (const [a, b] of answer) {
    const x = a - minx;
    const y = maxy - b;
    board[y][x] = "*";
  }
  // board.map(a => a.join(''))
  // console.log(board.map(a => a.join('')))

  return board.map((a) => a.join(""));
}
