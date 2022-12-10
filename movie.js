function solution(movie) {
  let answer = [];
  const getMovieCount = movie.reduce(
    (a, v) => ({ ...a, [v]: (a[v] || 0) + 1 }),
    {}
  );
  console.log(getMovieCount);
  for (let a in getMovieCount) {
    answer.push([a, getMovieCount[a]]);
  }
  const sortAnswer = answer.sort((a, b) => a[0] - b[0]);
  console.log(sortAnswer);
  const answerSort = sortAnswer.sort((a, b) => b[1] - a[1]);
  const result = answerSort.map((a) => a[0]);
  return result;
}

let movie = ["spy", "ray", "spy", "room", "once", "ray", "spy", "once"];
let result = ["spy", "once", "ray", "room"];
console.log(solution(movie));
const arr = [...new Set(movie)];
// console.log(arr);
const newMoive = [...new Set(movie)];
const count = Array(newMoive.length).fill(0);
// console.log(count);
const getMovieCount = movie.reduce(
  (a, v) => ({ ...a, [v]: (a[v] || 0) + 1 }),
  {}
);
// console.log(getMovieCount);
const answer = [];
for (let a in getMovieCount) {
  answer.push([a, getMovieCount[a]]);
}
answer.sort((a, b) => b[1] - a[1]);

answer.map((a) => a[0]);
