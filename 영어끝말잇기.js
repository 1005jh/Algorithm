// 이미 나온 단어인지 체크
// 전 마지막 문자 = 현재 첫 문자
// 사람 index % n +1
// 차례는 n씩 끊어서
function solution(n, words) {
  var answer = [];
  let word = new Set();
  const result = (n, index) => {
    const person = (index % n) + 1;
    const turn = Math.floor(index / n) + 1;
    return [person, turn];
  };
  for (let i = 0; i < words.length; i++) {
    if (word.has(words[i])) return result(n, i);
    if (0 < i) {
      const prev = words[i - 1];
      if (prev[prev.length - 1] !== words[i][0]) return result(n, i);
    }
    word.add(words[i]);
  }
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");

  return [0, 0];
}
