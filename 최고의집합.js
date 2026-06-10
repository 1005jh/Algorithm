function solution(n, s) {
    if (n > s) return [-1];
    let quota = Math.floor(s / n)
    let rest = s % n;
    let answer = Array(n).fill(quota)
    // console.log(quota,rest,answer)
    for (let i = 0; i < rest; i++) {
        answer[n - 1 - i] += 1;
    }
    return answer;
}