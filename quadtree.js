// 2^n x 2^n 크기의 2차원 정수 배열 arr
// 재귀
// 쪼갠 뒤의 범위가 줄어드는거
// 재귀에 arr[a][b] a,b와 범위설정 값 c 세개 필요
// 처음에는 전체 -> 실패 -> 4등분 (4개 돌아가야함) -> 실패시 반복 / 성공시 count
// 같은 값인지 체크해야함

function solution(arr) {
  var answer = [0, 0];
  const quadtree = (a, b, scale) => {
    let target = arr[a][b];
    let bool = true;

    for (let i = a; i < a + scale; i++) {
      for (let j = b; j < b + scale; j++) {
        if (arr[i][j] !== target) {
          bool = false;
          break;
        }
      }
      if (!bool) break;
    }
    if (bool) answer[target]++;
    let nextScale = scale / 2;
    quadtree(a, b, nextScale);
    quadtree(a, b + nextScale, nextScale);
    quadtree(a + nextScale, b, nextScale);
    quadtree(a + nextScale, b + nextScale, nextScale);
  };
  quadtree(0, 0, arr.length);
  return answer;
}

// RangeError: Maximum call stack size exceeded
// if (arr[i][j] !== target)  a,b넣어서 해서 생긴 에러인줄 알았으나
function solution(arr) {
  var answer = [0, 0];
  const quadtree = (a, b, scale) => {
    let target = arr[a][b];
    let bool = true;

    for (let i = a; i < a + scale; i++) {
      for (let j = b; j < b + scale; j++) {
        if (arr[i][j] !== target) {
          bool = false;
          break;
        }
      }
      if (!bool) break;
    }
    if (bool) {
      answer[target]++;
      return;
    }
    let nextScale = scale / 2;
    quadtree(a, b, nextScale);
    quadtree(a, b + nextScale, nextScale);
    quadtree(a + nextScale, b, nextScale);
    quadtree(a + nextScale, b + nextScale, nextScale);
  };
  quadtree(0, 0, arr.length);
  return answer;
}
// 재귀 종료 조건이 없어서 무한루프에 빠짐
