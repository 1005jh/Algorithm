function solution(players, m, k) {
  const n = 24;
  let servers = 0;
  let total = 0;
  const expire = Array(n + k).fill(0);

  for (let i = 0; i < n; i++) {
    servers -= expire[i];

    const required = Math.floor(players[i] / m);

    if (required > servers) {
      const add = required - servers;
      total += add;
      servers += add;

      expire[i + k] += add;
    }
  }

  return total;
}
