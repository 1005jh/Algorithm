function solution(park, routes) {
  const height = park.length;
  const width = park[0].length;
  const dirs = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };
  let currentRow = 0;
  let currentCol = 0;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (park[row][col] === "S") {
        currentRow = row;
        currentCol = col;
      }
    }
  }
  for (const route of routes) {
    const [op, distanceText] = route.split(" ");
    const distance = Number(distanceText);
    const [dr, dc] = dirs[op];
    let nextRow = currentRow;
    let nextCol = currentCol;
    let canMove = true;
    for (let step = 0; step < distance; step++) {
      nextRow += dr;
      nextCol += dc;
      const isOutOfRange =
        nextRow < 0 || nextRow >= height || nextCol < 0 || nextCol >= width;
      if (isOutOfRange) {
        canMove = false;
        break;
      }
      if (park[nextRow][nextCol] === "X") {
        canMove = false;
        break;
      }
    }
    if (canMove) {
      currentRow = nextRow;
      currentCol = nextCol;
    }
  }
  return [currentRow, currentCol];
}
