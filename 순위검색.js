// query 조건을 만족하는 인원 배열에 넣기
// info 최대 5만, query 최대 10만
// 쿼리마다 반복문 돌리면 터짐
// 미리 만들어두라함

function solution(info, query) {
  var answer = [];
  let map = new Map();
  const makemap = (arr, point, index, path) => {
    if (index === 4) {
      const key = path.join(" ");
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(point);
      return;
    }
    makemap(arr, point, index + 1, [...path, arr[index]]);
    makemap(arr, point, index + 1, [...path, "-"]);
  };
  for (let i of info) {
    const query = i.split(" ");
    const point = +query.pop();
    makemap(query, point, 0, []);
  }
  for (let q of query) {
    const cleanquery = q.replace(/ and /g, " ").split(" ");
    const point = +cleanquery.pop();
    const key = cleanquery.join(" ");

    if (!map.has(key)) {
      answer.push(0);
      continue;
    }
    const val = map.get(key);
    // console.log(val)
    const result = val.filter((n) => n >= point).length;
    // console.log(result)
    answer.push(result);
  }
  // console.log(answer)
  return answer;
}
// todo 정확성 테스트는 통과했으나 효율성에서 실패 => filter문제 ? 다시 풀어야함
