// 1. 자연수 뒤집어 더하기
// 자연수 n의 각 자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 리턴해주세요
// 예를들어 n이 12345이면 "5+4+3+2+1=15"라는 문자열을 리턴합니다.
// N의 범위 : 100,000,000 이하의 자연수
// 입출력 예 :
// n = 12345 , result "5+4+3+2+1=15"
// n = 1532576 , result "6+7+5+2+3+5+1=29"
function solution(n) {
    let result = "";
    new_n = n.toString().split('').reverse()
    //문자열로 만들어주고 요소하나하나마다 나눠 리버스
    sum_n = new_n.reduce((acc,cur)=>acc+parseInt(cur),0)
    // new_n의 모든 값을 합해야 하므로 reduce 사용
    // acc는 누산, cur은 현재값  뒤의 ,0은 초기값
    console.log(new_n.join('+'))
    //split으로 인해 요소마다 나눠진 new_n에 +를 넣어줌으로써
    //답과 동일하게 만들어줌
    return new_n.join('+')+"="+sum_n  // 3+5+2+8+1+7=26
}
console.log(solution(718253))



