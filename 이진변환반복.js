function solution(s, arr = [0, 0]) {
  if (s === "1") return arr;
  const firstLen = s.length;
  s = s.replace(/[^0]/g, "");
  const secondLen = s.length;
  s = (firstLen - secondLen).toString(2);
  return solution(s, [arr[0] + 1, arr[1] + secondLen]);
}

let s = "110010101001";
console.log(solution(s));
