// 3. 같은 단어는 싫어!
// 배열 arr와 정수n이 주어집니다. 배열 arr의 각 원소는 문자열로 이루어져 잇습니다. 
// 이때, 배열 arr에서 중복되는 단어는 전부 제거하려고 합니다. 단, 제거된 후 남은 단어들을 반환할 때는
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬을 하려 합니다. 

// 예를들어, strings가["brush", "sun", "brush", "bed", "car"]이고, n이 1이면
// 중복을 제거한 배열인 ["sun","bed","car"]에서 각 단어의 인덱스 1의 문자 "u","e","a"로 strings를 정렬합니다.

// -strings는 길이 1이상, 50이하인 배열
// -strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// -strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// -모든 strings의 원소의 길이는 n보다 큽니다.
// -인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.


function solution(arr, n) {
    // let answer = [];
    let a_result = arr.filter((v, i)=> (arr.indexOf(v) === i) ? false : true)
    //중복된 값이 모두 없어야 하므로 filter와 indexOf를 이용해서 중복값 추출
    let b_result = arr.filter((v, i)=> arr.indexOf(v) === i)
    //중복을 제거한 배열을 추출
    console.log(a_result,b_result);
    //[dog],['coke','water','glass','dog','yogurt','vitamin']
    let answer = a_result.concat(b_result)
    .filter(item => !a_result.includes(item) || !b_result.includes(item))
    //concat, filter, includes를 이용해 두 배열에서의 중복값을 제거해줌
    console.log(answer)
    // [ 'coke', 'water', 'glass', 'yogurt', 'vitamin' ]
    


    // arr.sort();
    // result.sort();
    // for(i=0; i<arr.length; i++){
    //     if(arr[i] !== result[i]){
    //         return answer.push(arr[i])
    //     }
    // }
    // console.log(answer)
    
    return answer.sort(function(a,b){
        var first = a[n];
        var second = b[n];
        if(first === second){
            return (a > b) - (a < b);
        }else{
            return (first > second) - (first < second);
        }
    }) //n번째 인덱스부터 오름차순 배열 성공~

    
    
        //     let chr1 = a.charAt(n);
    //     let chr2 = b.charAt(n);
    // //문자열에서 특정 인덱스에 위치하는 유니코드 단일문자 반환하는 charAt사용

    //     if (chr1 == chr2){
    //         return (a > b) - (a < b);
    //     } else {
    //         return (chr1>chr2) - (chr1 < chr2);
    //     }
    //     })
   

    // return result.slice(n-1).sort((a,b)=> {a-b;})
}

let arr= ["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"];
// let arr= ["brush", "sun", "brush", "bed", "car"];
let n=2;
console.log(solution(arr, n));
//[ 'glass', 'yogurt', 'coke', 'vitamin', 'water' ] 정답과 일치!








