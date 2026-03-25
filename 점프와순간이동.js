// 순간이동은 소모비용 0, 점프는 점프한만큼 소모
// 순간이동은 두배 , 5 = 4 2 1 2로 나눠서 나머지 ++ 6 3 2 1 0
// 홀수는 무조건 점프

function solution(n) {
  var ans = 0;
  while (0 < n) {
    if (n % 2 === 1) {
      ans++;
      n = n - 1;
    } else {
      n = n / 2;
    }
  }

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  // console.log('Hello Javascript')

  return ans;
}
