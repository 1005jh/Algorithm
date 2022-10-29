function solution(n, arr1, arr2) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    let secret = (arr1[i] | arr2[i]).toString(2);
    secret = "0".repeat(n - secret.length) + secret;
    // console.log(secret)
    secret = secret.replace(/[10]/g, (a) => (a > 0 ? "#" : " "));
    console.log(secret);
    answer.push(secret);
  }
  return answer;
}
