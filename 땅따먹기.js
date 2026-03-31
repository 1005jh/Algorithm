// 밟은 땅은 못 밟음

function solution(land) {
  var answer = 0;
  const n = land.length;
  let arr = [];
  // console.log()
  let maxNum = 0;
  let maxIdx = -1;
  let idx = -1;
  for (let i = 0; i < n; i++) {
    arr = [...land[i]];
    for (let j = 0; j < 4; j++) {
      if (maxIdx !== j && maxNum < arr[j]) {
        maxNum = arr[j];
        idx = j;
        // console.log(idx)
      }
    }
    answer += maxNum;
    maxIdx = idx;
    maxNum = 0;
  }
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  // console.log(arr)

  return answer;
}

//todo 같은값이 여러개일 시 문제가 발생. ex) [[1,2,3,4],[7,7,7,5]...] 전체를 봐야함

function solution(land) {
  let dp = [...land[0]];

  for (let i = 1; i < land.length; i++) {
    let newDp = [0, 0, 0, 0];

    for (let j = 0; j < 4; j++) {
      let maxPrev = 0;

      for (let k = 0; k < 4; k++) {
        if (k !== j) {
          maxPrev = Math.max(maxPrev, dp[k]);
        }
      }

      newDp[j] = land[i][j] + maxPrev;
    }

    dp = newDp;
  }

  return Math.max(...dp);
}
// 이전 위치값을 제외한 최댓값 저장
