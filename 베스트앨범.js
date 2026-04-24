// 장르별로 가장 많이 재생된 노래 두개씩 베스트 앨범
// 장르별 총 재생 수 집계
// 장르별로 분류
// 장르별 정렬
// 정렬된 장르에서 높은 두개
// Map 사용
function solution(genres, plays) {
  var answer = [];
  const genrem = new Map();
  const songm = new Map();
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const playtime = plays[i];
    // console.log(genre,playtime)
    genrem.set(genre, (genrem.get(genre) || 0) + playtime);
    // console.log(genrem)
    if (!songm.has(genre)) songm.set(genre, []);
    songm.get(genre).push({ idx: i, playtime: playtime });
  }
  // console.log(...genrem.entries())
  const sortedgenre = [...genrem.entries()].sort((a, b) => b[1] - a[1]);
  // console.log(sortedgenre)
  for (let [genre, playtime] of sortedgenre) {
    const songs = songm.get(genre);
    // console.log(songs)
    songs.sort((a, b) => {
      if (b.playtime === a.playtime) return a.idx - b.idx;
      return b.playtime - a.playtime;
    });
    // console.log(songs)
    for (let i = 0; i < Math.min(2, songs.length); i++) {
      answer.push(songs[i].idx);
    }
  }
  return answer;
}
