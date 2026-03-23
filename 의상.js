// 종류별 의상 갯수 구하기
// 모두 곱해서 아무것도 안입는 경우 빼기

function solution(clothes) {
  var answer = 1;
  let map = new Map();
  for (let [item, type] of clothes) {
    map.set(type, (map.get(type) || 0) + 1);
  }
  for (let num of map.values()) {
    answer = answer * (num + 1);
  }
  return answer - 1;
}
