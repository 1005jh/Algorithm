// 1. 없는 정수 사이의 합
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 숫자는 두개입니다. 두 정수를 a,b라고 했을 때 a와 b 사이에 속한 모든 정수의 합을
// 리턴하는 함수, solution을 완성하세요. 예를들어 a=3,b=5인 경우 3+4+5 = 12를 리턴합니다.


function solution(arr1){
    let numbers = [0,1,2,3,4,5,6,7,8,9]
    
    arr1.sort()
    console.log(arr1)
    let answer = numbers.concat(arr1)
    .filter(item => !numbers.includes(item) || !arr1.includes(item))
    console.log(answer)
    let a = answer[0]
    let b = answer[1]
    
    console.log(answer[0],answer[1])
    let sum = 0;
    if(a<=b){
        for(let i = a; i<=b; i++){
            sum+= i;
        }
    }else if (b<=a){
        for(let i=b; i<=a; i++){
            sum +=i;
        }
    }return sum
}
let arr1 = [1,3,5,9,6,4,8,0];
console.log(solution(arr1));