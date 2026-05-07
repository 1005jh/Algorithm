function solution(numbers) {
  var answer = "";
  const stringnums = numbers.map(String);
  // console.log(stringnums)
  stringnums.sort((a, b) => b + a - (a + b));
  // console.log(stringnums)
  stringnums.join("");
  console.log(stringnums.join(""));
  return stringnums.join("") === "0" ? "0" : stringnums.join("");
}
 테스트 11 실패
 return stringnums.join("") === "0" ? "0" : stringnums.join("");
 이 부분을 이렇게
 return stringnums[0] === "0" ? "0" : stringnums.join("");
 ['0','0'] 일 시 문제