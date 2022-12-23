// 문자열 나누기
// 문제 설명
// 문자열 s가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.

// 먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
// 이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다. 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
// s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.
// 만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.
// 문자열 s가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.

// 제한사항
// 1 ≤ s의 길이 ≤ 10,000
// s는 영어 소문자로만 이루어져 있습니다.
// 입출력 예
// s	result
// "banana"	3
// "abracadabra"	6
// "aaabbaccccabba"	3
// 입출력 예 설명
// 입출력 예 #1
// s="banana"인 경우 ba - na - na와 같이 분해됩니다.

// 입출력 예 #2
// s="abracadabra"인 경우 ab - ra - ca - da - br - a와 같이 분해됩니다.

// 입출력 예 #3
// s="aaabbaccccabba"인 경우 aaabbacc - ccab - ba와 같이 분해됩니다.
//*정현 풀이
function solution(s) {
  let answer = 0;
  let firstChar = "";
  let stCount = 0;
  let ndCount = 0;
  for (let a of s) {
    if (!firstChar) firstChar = a;
    if (firstChar === a) stCount++;
    else ndCount++;
    if (stCount === ndCount) {
      answer++;
      stCount = 0;
      ndCount = 0;
      firstChar = "";
    }
  }
  if (firstChar) answer++;
  return answer;
}
//*세준풀이
// function solution(s, result = 0) {
//   if (s.length === 0) return result;
//   let cnt = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[0] === s[i]) cnt++;
//     else cnt--;
//     if (cnt === 0 || i + 1 === s.length) {
//       return solution(s.slice(i + 1), ++result);
//     }
//   }
// }
//*준혁풀이
// function solution(s) {
//   let answer = 0;
//   const arr = s.split("");

//   let firstWord = "";
//   let xCnt = 0;
//   let otherCnt = 0;

//   while (arr.length > 0) {
//     if (firstWord.length === 0) {
//       firstWord = arr.shift();
//       xCnt++;
//     }

//     if (firstWord === arr.shift()) {
//       xCnt++;
//     } else {
//       otherCnt++;
//     }

//     if (xCnt === otherCnt) {
//       answer++;
//       xCnt = 0;
//       otherCnt = 0;
//       firstWord = "";
//     }
//   }

//   if (firstWord.length) {
//     answer++;
//   }

//   return answer;
// }
const s =
  "aaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabbaaaabbaccccabba";
console.time("solution");
console.log(solution(s));
console.timeEnd("solution");
