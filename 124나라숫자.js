 // 3으로 나눈 나머지
// 나머지가 0이면 몫에서 하나 빼고 4

function solution(n) {
    var answer = '';
    const nums = ['4','1','2']
    while (0 < n) {
        let target = n % 3
        answer = nums[target] + answer
        if (target === 0) n = Math.floor(n/3) -1
        else n = Math.floor(n/3)
    }
    
    return answer;
}
+= 를 쓰려면 뒤집어야함