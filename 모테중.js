// 2. 이상한 문자 만들기2
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로
// 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼
// 문자열을 리턴하는 함수, solution을 완성하세요

// - 공백 포함 x
// - 첫글짜는 짝수처리

function solution(s) {
    let answer = "";
    return '"'+s.split(' ').map(a => a.split('').map((a,i)=> i%2 == 0 ? a.toUpperCase() : a.toLowerCase()).join('')).join(' ')+'"';
} 
let s="hang hae ninety nine"
console.log(solution(s))