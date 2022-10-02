// 2. 이상한 문자 만들기2
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로
// 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼
// 문자열을 리턴하는 함수, solution을 완성하세요

// - 공백 포함 x
// - 첫글짜는 짝수처리

function solution(s) {
  let answer = "";
  let arr = s.split(" ").map((a) => a.split(""));
  console.log(s.split(" ").map((a) => a.split("")));
  // [
  //     [ 'h', 'a', 'n', 'g' ],
  //     [ 'h', 'a', 'e' ],
  //     [ 'n', 'i', 'n', 'e', 't', 'y' ],
  //     [ 'n', 'i', 'n', 'e' ]
  //   ]
  let arr_1 = arr[0];
  let arr_2 = arr[1];
  let arr_3 = arr[2];
  let arr_4 = arr[3];
  console.log(arr_1, arr_2, arr_3, arr_4);
  let arr_5 = [...arr_1, ...arr_2, ...arr_3, ...arr_4];
  console.log(arr_5);
  console.log(
    arr_5.map((a, i) => (i % 2 == 0 ? a.toUpperCase() : a.toLowerCase()))
  );
  let arr_6 = arr_5.map((a, i) =>
    i % 2 == 0 ? a.toUpperCase() : a.toLowerCase()
  );
  let result1 = arr_6.slice(0, arr_1.length);
  let result2 = arr_6.slice(arr_1.length, arr_1.length + arr_2.length);
  let result3 = arr_6.slice(
    arr_1.length + arr_2.length,
    arr_1.length + arr_2.length + arr_3.length
  );
  let result4 = arr_6.slice(
    arr_1.length + arr_2.length + arr_3.length,
    arr_1.length + arr_2.length + arr_3.length + arr_4.length
  );

  console.log(result1, result2, result3, result4);
  result = [result1, result2, result3, result4];
  // result1.join('')
  // result2.join('')
  // result3.join('')
  // result4.join('')
  // result = [
  //     ...result1,
  //     ...result2,
  //     ...result3,
  //     ...result4
  // ]
  console.log(result.map((a) => a.join("")));
  let new_result = [result.map((a) => a.join(""))];
  console.log(new_result.map((a) => a.join(" ")));
  // console.log(result.join(' ').map(a => a.join('')))
  // console.log(result.join('').map((a) => a.join(' ')))
  return '"' + new_result.map((a) => a.join(" ")) + '"';
}

let s = "hang hae ninety nine";
console.log(solution(s));
