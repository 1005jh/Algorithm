const word = "UUUUU";
const result = 3905;
// const word = "I";
// const result = 1563;
// const word = "EIO";
// const result = 1189;
// const word = "AAAE";
// const result = 10;

//*BFS
function solution(word) {
  const alphabets = ["A", "E", "I", "O", "U"];
  const queue = [];
  let answer = 0;
  for (let i = 0; i < 5; i++) {
    queue.push(alphabets[i]);
  }
  while (queue.length > 0) {
    const curWord = queue.shift(); // A  =  1  // AA  =  2 queue = [AE,AI,AO,AU,E,I,O,U] .....
    // console.log(curWord, queue);
    answer++;
    if (curWord === word) {
      break;
    }
    for (let i = 0; i < 5; i++) {
      const newWord = curWord + alphabets[i];

      if (newWord.length <= 5) {
        queue.push(newWord);
      }
    }
    queue.sort();
  }

  return answer;
}
//* DFS
// function solution(word) {
//   const words = [];
//   const alphabets = ["A", "E", "I", "O", "U"];

//   function dfs(curWord, len) {
//     if (len > 5) return;
//     words.push(curWord);
//     for (let i = 0; i < 5; i++) {
//       dfs(curWord + alphabets[i], len + 1);
//     }
//   }

//   dfs("", 0);
//   words.sort();
//   //   console.log(words);
//   return words.indexOf(word);
// }
console.time("solution");
console.log(solution(word));
console.timeEnd("solution");
