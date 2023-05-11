
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
console.log(input);
// function solution(N) {
//   let answer = 0;
//   const three = [];
//   const seven = [];
//   for (let i = 1; i <= N; i++) {
//     if (i % 3 === 0) {
//       three.push(i);
//     }
//     if (i % 7 === 0) {
//       seven.push(i);
//     }
//   }
//   console.log(three, seven);
//   const sum = three.concat(seven);
//   answer = sum.reduce((a, c) => a + c, 0);
//   return answer;
// }
// console.log(solution(N));
