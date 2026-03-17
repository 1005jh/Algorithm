// 맨해튼거리 2
// (r+-, c), (r, c+-) 직선방향 중간에 X가 존재해야 함
//           (r+-, c+-) 대각선 방향
// P 주변으로 상하좌우, 대각 서치

function solution(places) {
  var answer = [];
  for (let place of places) {
    const coordinate = place.map((v) => v.split(""));
    // console.log(coordinate)
    let bool = 1;
    // x,y좌표로
    for (let i = 0; i < 5 && bool === 1; i++) {
      for (let j = 0; j < 5 && bool === 1; j++) {
        if (coordinate[i][j] !== "P") continue;
        // 상하좌우 1칸
        const move1 = [
          [1, 0],
          [-1, 0],
          [0, 1],
          [0, -1],
        ];
        for (let [mx, my] of move1) {
          const nextx = i + mx;
          const nexty = j + my;
          // console.log(nextx,nexty)
          if (0 <= nextx && nextx < 5 && 0 <= nexty && nexty < 5) {
            if (coordinate[nextx][nexty] === "P") {
              bool = 0;
              break;
            }
          }
        }
        if (bool === 0) break;
        // 상하좌우 2칸
        const move2 = [
          [2, 0],
          [-2, 0],
          [0, 2],
          [0, -2],
        ];
        for (let [mx, my] of move2) {
          const nextx = i + mx;
          const nexty = j + my;
          // console.log(nextx,nexty)
          if (0 <= nextx && nextx < 5 && 0 <= nexty && nexty < 5) {
            if (coordinate[nextx][nexty] === "P") {
              //사이검사
              const tx = i + mx / 2;
              const ty = j + my / 2;
              // console.log(tx,ty)
              if (coordinate[tx][ty] !== "X") {
                bool = 0;
                break;
              }
            }
          }
        }
        if (bool === 0) break;
        //대각선
        const move3 = [
          [1, 1],
          [1, -1],
          [-1, 1],
          [-1, -1],
        ];
        for (let [mx, my] of move3) {
          const nextx = i + mx;
          const nexty = j + my;
          if (0 <= nextx && nextx < 5 && 0 <= nexty && nexty < 5) {
            if (coordinate[nextx][nexty] === "P") {
              if (
                coordinate[i][nexty] !== "X" ||
                coordinate[nextx][j] !== "X"
              ) {
                bool = 0;
                break;
              }
            }
          }
        }
      }
    }
    answer.push(bool);
  }
  return answer;
}

// BFS풀이
function solution(places) {
  const answer = [];

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  for (const place of places) {
    const board = place.map((v) => v.split(""));
    let valid = 1;

    const bfs = (x, y) => {
      const visited = Array.from({ length: 5 }, () => Array(5).fill(false));
      const queue = [[x, y, 0]];
      visited[x][y] = true;

      while (queue.length) {
        const [cx, cy, dist] = queue.shift();

        if (dist >= 1 && board[cx][cy] === "P") return false;
        if (dist === 2) continue;

        for (let i = 0; i < 4; i++) {
          const nx = cx + dx[i];
          const ny = cy + dy[i];

          if (nx < 0 || ny < 0 || nx >= 5 || ny >= 5) continue;
          if (visited[nx][ny]) continue;
          if (board[nx][ny] === "X") continue;

          visited[nx][ny] = true;
          queue.push([nx, ny, dist + 1]);
        }
      }

      return true;
    };

    for (let i = 0; i < 5 && valid; i++) {
      for (let j = 0; j < 5 && valid; j++) {
        if (board[i][j] === "P") {
          if (!bfs(i, j)) valid = 0;
        }
      }
    }

    answer.push(valid);
  }

  return answer;
}
