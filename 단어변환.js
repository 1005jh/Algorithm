function solution(begin, target, words) {
  var answer = 0;
  if (!words.includes(target)) return 0;
  function isOneLetterDifferent(word1, word2) {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) count++;
      if (count > 1) return false;
    }
    return count === 1;
  }
  const queue = [[begin, 0]];
  const visited = Array(words.length).fill(false);
  while (queue.length > 0) {
    const [currentWord, step] = queue.shift();
    if (currentWord === target) {
      return step;
    }
    for (let i = 0; i < words.length; i++) {
      if (!visited[i] && isOneLetterDifferent(currentWord, words[i])) {
        visited[i] = true;
        queue.push([words[i], step + 1]);
      }
    }
  }

  return 0;
}
