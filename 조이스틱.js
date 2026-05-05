// ▲ - 다음 알파벳
// ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
// ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
// ▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
// abcdefghijklmnopqrstuvwxyz
function solution(name) {
  var answer = 0;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const reverse = chars.split("").reverse().join("");
  // console.log(chars,reverse)
  for (let i = 0; i < name.length; i++) {
    const char = name[i];
    // console.log(chars.indexOf(name[i]),reverse.indexOf(name[i]) )
    const updown = Math.min(
      chars.indexOf(name[i]),
      reverse.indexOf(name[i]) + 1,
    );
    // console.log(updown)
    answer += updown;
    // console.log(answer)
  }
  let curs = name.length - 1;
  for (let i = 0; i < name.length; i++) {
    let next = i + 1;
    while (next < name.length && name[next] === "A") next++;
    const type1 = i * 2 + (name.length - next);
    const type2 = (name.length - next) * 2 + i;
    curs = Math.min(curs, type1, type2);
    // console.log(curs)
  }
  return answer + curs;
}
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
// charCodeAt을 이용해서 풀 수 있다고 함
