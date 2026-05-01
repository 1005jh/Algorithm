

function solution(number, k) {
    var answer = '';
    let arr= []
    for (let i = 0; i < number.length; i ++) {
        while(0<k&&0<arr.length&&arr[arr.length-1] < number[i]) {
            arr.pop()
            k--
        }
        arr.push(number[i])
    }
    // console.log(arr)
    return arr.join('');
}

마지막 실패 why?
질문하기 보니
입력값 〉	"21", 1
기댓값 〉	"2"
실행 결과 〉	실행한 결괏값 "21"이 기댓값 "2"과 다릅니다.


function solution(number, k) {
    var answer = '';
    let arr= []
    for (let i = 0; i < number.length; i ++) {
        while(0<k&&0<arr.length&&arr[arr.length-1] < number[i]) {
            arr.pop()
            k--
        }
        arr.push(number[i])
    }
    // console.log(arr)
    while (0<k) {
        arr.pop()
        k--
    }
    return arr.join('');
}


이거도 됨
function solution(number, k) {
    var answer = '';
    let arr= []
    for (let i = 0; i < number.length; i ++) {
        while(0<k&&0<arr.length&&arr[arr.length-1] < number[i]) {
            arr.pop()
            k--
        }
        arr.push(number[i])
    }
    // console.log(arr)
    // while (0<k) {
    //     arr.pop()
    //     k--
    // }
    return arr.slice(0,arr.length-k).join('');
}