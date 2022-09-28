// 3. 소수의 개수와 덧셈
// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있다. str에 나타나는 숫자 중 소수의 최대값
// 과 소수가 아닌 수의 최소값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수,
// solution을 완성하세요
// 예를들어 s 가 "2 3 4 5"라면 "4 5"를 리턴하고, "15 3 10 9 7 8"라면 "8 7"을 리턴하면 됩니다.

// - s에는 둘 이상의 정수가 공백으로 구번되어 있다.
// - 문자열에는 소수가 한개 이상 섞여 있다. 
// - 문자열에는 소수가 아닌 수가 ㅎ한개 이상 섞여 있다.
// - 음수는 없다.
function isPrime(x) {
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) return false; //나누어떨어지는 수가 있다면 false소수가 아니다
    }
    return true; // 나눠떨어지는 수가 없다면 true 소수다
  }
function solution(s){
    let answer = "";
    var a = []; // 소수 아닌 값 담아줄 빈 배열
    var b = []; // 소수인 값 담아줄 빈 배열
    s = s.split(' ') // s를 공백 단위로 나눠준다.
    
    console.log()
    for (i=0; i<=s[i]; i++){
        // new_s = parseInt(s[i]) 이건 못씀 배열이기 때문에 parseInt를 하니 NaN이 나옴
        isPrime(s[i]) ? b.push(s[i]) : a.push(s[i])
    // s[i]가 소수라면  b의 배열에 넣어주고 아니라면 a의 배열에 넣어준다
    } 
    console.log(s)
    let a_a = a.map((i)=> Number(i)) //배열이기 때문에 map 메서드를 이용해서 a의 모든 요소를 숫자열로 만들어준다.
    let b_b = b.map((i)=> Number(i)) //배열이기 때문에 map 메서드를 이용해서 b의 모든 요소를 숫자열로 만들어준다.
    Math.max(...b_b) //Math.max는 최대값을 구하는 메서드로 ...b_b는 b_b의 배열 모두에서 찾겠단 뜻
    Math.min(...a_a) //Math.min은 최소값을 구하는 메서드로 뒤는 위와 같음
    
    answer = '"'+ Math.min(...a_a)+" "+Math.max(...b_b) +'"'
    //답과 같게 만들어주기 위한 작업 따옴표나 쌍따옴표를 서로 다른걸로 감싸주면 표기 가능하다.
    
    return answer;
}
let s= "97 75 88 99 95 92 73"

console.log(solution(s))
