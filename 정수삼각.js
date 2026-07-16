function solution(triangle) {
  const arr = triangle.map((row) => [...row]);
  for (let row = 1; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (col === 0) {
        arr[row][col] += arr[row - 1][col];
        continue;
      }
      if (col === arr[row].length - 1) {
        arr[row][col] += arr[row - 1][col - 1];
        continue;
      }
      arr[row][col] += Math.max(arr[row - 1][col - 1], arr[row - 1][col]);
    }
  }
  return Math.max(...arr[arr.length - 1]);
}
