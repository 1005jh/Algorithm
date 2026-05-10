function solution(n, t, m, p) {
  var answer = "";
  let num = 0;
  let str = "";
  while (str.length < t * m) {
    str += num.toString(n).toUpperCase();
    num++;
  }
  for (let i = p - 1; answer.length < t; i += m) {
    answer += str[i];
  }

  return answer;
}
