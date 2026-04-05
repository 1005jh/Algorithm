// col번째 컬럼 기준 오름차순
// 값 동일 시 첫번째 컬럼값 기준 내림차순
// S_i = 각 컬럼값 % i(i = 1 ~)
// row_begin ≤ i ≤ row_end 범위의 S_i들을 전부 XOR
// XOR 같으면 0 다르면 1
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Atomics/xor
function solution(data, col, row_begin, row_end) {
  var answer = 0;
  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) return b[0] - a[0];
    return a[col - 1] - b[col - 1];
  });

  for (let i = row_begin; i <= row_end; i++) {
    let sum = 0;

    for (let num of data[i - 1]) {
      sum += num % i;
    }
    answer ^= sum;
  }
  return answer;
}
// 1 index를 0 index로 만들어줘야함
