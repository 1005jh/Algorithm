function solution(players, callings) {
  const rank = {};
  for (let index = 0; index < players.length; index++) {
    rank[players[index]] = index;
  }
  for (const calledPlayer of callings) {
    const currentIndex = rank[calledPlayer];
    const frontPlayer = players[currentIndex - 1];
    players[currentIndex - 1] = calledPlayer;
    players[currentIndex] = frontPlayer;
    rank[calledPlayer] = currentIndex - 1;
    rank[frontPlayer] = currentIndex;
  }
  return players;
}
