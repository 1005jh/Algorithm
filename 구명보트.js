// 오름차순 정렬하기
// 투포인터 while문

function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);
  // console.log(people)
  let left = 0;
  let right = people.length - 1;
  while (left <= right) {
    if (people[left] + people[right] <= limit) left++;
    right--;
    answer++;
  }
  return answer;
}
