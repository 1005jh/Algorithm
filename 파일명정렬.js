// 파일명에 포함된 숫자를 반영한 정렬 기능
// HEAD, NUMBER, TAIL로 분리하기
// 숫자가 나오기 전까지가 HEAD
// 최대 다섯자리 NUMBER
// 나머지가 TAIL
// HEAD기준으로 사전순 정렬(대소문자 구분 x)
// HEAD부분이 대소문자 차이 외 같을 시 NUMBER 오름차순정렬 0은 무시 parseInt사용하기
// 앞의 둘 다 같을 경우 원래 입력된 순서 건들지 않아도 됨
function solution(files) {
  var answer = [];
  //여기서 정렬해야함
  const result = files.sort((a, b) => {
    const sepA = separation(a);
    const sepB = separation(b);

    if (sepA.head.toLowerCase() < sepB.head.toLowerCase()) return -1;
    if (sepA.head.toLowerCase() > sepB.head.toLowerCase()) return 1;

    const numA = parseInt(sepA.number);
    const numB = parseInt(sepB.number);
    return numA - numB;
  });
  return result;
}
// 분리
function separation(file) {
  let headIdx = 0;
  for (let i = 0; i < file.length; i++) {
    if (!isNaN(file[i])) {
      headIdx = i;
      break;
    }
  }
  const head = file.slice(0, headIdx);
  // console.log("1",head)
  let numIdx = headIdx;
  for (let i = numIdx; i < file.length; i++) {
    if (isNaN(file[i])) {
      numIdx = i;
      break;
    }
  }
  const number = file.slice(headIdx, numIdx);
  const tail = file.slice(numIdx);
  // console.log("1", number, tail)
  return { head, number, tail };
}
// 테스트 여러개 실패
// todo 5자리 제한을 안했네..
// todo 공백도 체크를 안했음

// 파일명에 포함된 숫자를 반영한 정렬 기능
// HEAD, NUMBER, TAIL로 분리하기
// 숫자가 나오기 전까지가 HEAD
// 최대 다섯자리 NUMBER
// 나머지가 TAIL
// HEAD기준으로 사전순 정렬(대소문자 구분 x)
// HEAD부분이 대소문자 차이 외 같을 시 NUMBER 오름차순정렬 0은 무시 parseInt사용하기
// 앞의 둘 다 같을 경우 원래 입력된 순서 건들지 않아도 됨
function solution(files) {
  var answer = [];
  //여기서 정렬해야함
  const result = files.sort((a, b) => {
    const sepA = separation(a);
    const sepB = separation(b);

    if (sepA.head.toLowerCase() < sepB.head.toLowerCase()) return -1;
    if (sepA.head.toLowerCase() > sepB.head.toLowerCase()) return 1;

    const numA = parseInt(sepA.number, 10);
    const numB = parseInt(sepB.number, 10);
    return numA - numB;
  });
  return result;
}
// 분리
function separation(file) {
  let headIdx = 0;
  // for (let i = 0; i < file.length; i++) {
  //     if ( !isNaN(file[i])){
  //         headIdx = i
  //         break;
  //     }
  // }
  while (
    headIdx < file.length &&
    !(file[headIdx] >= "0" && file[headIdx] <= "9")
  )
    headIdx++;
  const head = file.slice(0, headIdx);
  // console.log("1",head)
  let numIdx = headIdx;
  // for (let i = numIdx; i<file.length; i++) {
  //     if (isNaN(file[i])|| i - headIdx >= 5) {
  //         numIdx = i
  //         break;
  //     }
  // }
  while (
    numIdx < file.length &&
    file[numIdx] >= "0" &&
    file[numIdx] <= "9" &&
    numIdx - headIdx < 5
  ) {
    numIdx++;
  }
  const number = file.slice(headIdx, numIdx);
  const tail = file.slice(numIdx);
  // console.log("1", number, tail)
  return { head, number, tail };
}
