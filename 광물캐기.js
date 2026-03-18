// 마인은 다이아몬드 곡괭이, 철 곡괭이, 돌 곡괭이를 각각 0개에서 5개까지 가지고 있음
// 1. picks는 [dia, iron, stone]과 같은 구조
// 2. 한번 사용하면 5번을 무조건 캐야함 5개씩 끊기
// 3. 광물순서는 바꿀 수 없음
// 4. 모든 광물을 캐거나, 곡괭이가 없을 때까지 진행
// 2로 만들어서 피로도로 정렬하고 곡괭이 배정 최소의 피로도 뽑기
function solution(picks, minerals) {
  var answer = 0;
  const fatigueBoard = {
    diamond: { diamond: 1, iron: 1, stone: 1 },
    iron: { diamond: 5, iron: 1, stone: 1 },
    stone: { diamond: 25, iron: 5, stone: 1 },
  };
  const totalPicks = picks.reduce((a, b) => a + b, 0);
  // console.log(totalPicks)
  let splitArr = [];
  for (let i = 0; i < minerals.length; i += 5) {
    if (totalPicks <= splitArr.length) break;
    const slice = minerals.slice(i, i + 5);
    // console.log(slice)
    let fatigue = 0;
    for (let i of slice) {
      if (i === "diamond") fatigue += 25;
      else if (i === "iron") fatigue += 5;
      else fatigue += 1;
    }
    // console.log(fatigue)
    splitArr.push({ minerals: slice, fatigue });
  }
  // console.log(splitArr)
  splitArr.sort((a, b) => b.fatigue - a.fatigue);
  // console.log(splitArr)
  for (let arr of splitArr) {
    let type;
    if (picks[0] > 0) {
      type = "diamond";
      picks[0]--;
    } else if (picks[1] > 0) {
      type = "iron";
      picks[1]--;
    } else {
      type = "stone";
      picks[2]--;
    }
    for (let mineral of arr.minerals) {
      answer += fatigueBoard[type][mineral];
    }
  }
  return answer;
}
