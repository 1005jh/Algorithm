function solution(sequence, k) {
  var answer = [];
  let left = 0;
  let sum = 0;
  let length = 0;
  let minlength = 1000000;
  for (let i = 0; i < sequence.length; i++) {
    sum += sequence[i];
    while (k <= sum) {
      if (sum === k) {
        length = i - left;
        if (length < minlength) {
          minlength = length;
          answer[0] = left;
          answer[1] = i;
        }
      }
      sum -= sequence[left];
      left++;
    }
  }
  return answer;
}
