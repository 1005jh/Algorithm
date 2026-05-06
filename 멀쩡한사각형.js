// w * h
// 대각선에 의해 사용할 수 없는 사각형 갯수 구하기
// ??
// 1. 사용 불가능한 사각형 개수 공식가로가 \(W\), 세로가 \(H\)인 직사각형을 대각선으로 자를 때, 사용할 수 없는 정사각형의 총 개수는 아래와 같습니다.\(\text{사용\ 불가능한\ 사각형\ 개수}=W+H-\gcd (W,H)\)\(\gcd(W, H)\): 가로(\(W\))와 세로(\(H\))의 최대공약수(Greatest Common Divisor)입니다.

function solution(w, h) {
  var answer = 1;
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  const total = w * h;
  const broken = w + h - gcd(w, h);

  return total - broken;
}

대각선 방정식 y = ( h / w) *x
꼭짓점은 x,y가 정수일 때
즉 w가 hx를 나눌 수 있다
최대공약수를 넣으면 
w = g * w서로소
h = g * h서로소

x는 0부터 g*w서로소까지 총 g + 1개 => 정수좌표 개수
시작점 끝점을 제외하고 gcd(w,h) -1개를 넘음

w + h 번 칸을 새로 들어가고,
겹친횟수를 빼야하기 때문에 w+h-gcd(w,h)가 망가진 칸 갯수