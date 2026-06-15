// 첫번째 뜯기 안뜯기

function solution(sticker) {
  var answer = 0;
  const length = sticker.length;
  if (length === 1) return sticker[0];

  const arr1 = Array(length).fill(0);
  arr1[0] = sticker[0];
  arr1[1] = sticker[0];
  for (let i = 2; i < length - 1; i++) {
    arr1[i] = Math.max(arr1[i - 2] + sticker[i], arr1[i - 1]);
  }

  const arr2 = Array(length).fill(0);
  arr2[0] = 0;
  arr2[1] = sticker[1];
  for (let i = 2; i < length; i++) {
    arr2[i] = Math.max(arr2[i - 2] + sticker[i], arr2[i - 1]);
  }
  console.log(arr1, arr2);

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");

  return Math.max(arr1[length - 2], arr2[length - 1]);
}
