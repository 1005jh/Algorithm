function solution(operations) {
  var answer = [];
  const queue = [];

  for (const op of operations) {
    const [command, valueStr] = op.split(" ");
    const value = Number(valueStr);

    if (command === "I") {
      queue.push(value);
      queue.sort((a, b) => a - b);
    } else if (command === "D") {
      if (queue.length === 0) continue;

      if (value === 1) {
        queue.pop();
      } else if (value === -1) {
        queue.shift();
      }
    }
  }
  if (queue.length === 0) {
    return [0, 0];
  } else {
    return [queue[queue.length - 1], queue[0]];
  }
}
