function solution(book_time) {
  var answer = 0;
  const time = book_time.map(([s, e]) => {
    const [shour, smin] = s.split(":").map(Number);
    const [ehour, emin] = e.split(":").map(Number);
    const start = shour * 60 + smin;
    const end = ehour * 60 + emin + 10;
    return [start, end];
  });

  time.sort((a, b) => a[0] - b[0]);
  const roomlength = [];
  for (const [start, end] of time) {
    let bool = false;
    for (let i = 0; i < roomlength.length; i++) {
      if (roomlength[i] <= start) {
        roomlength[i] = end;
        bool = true;
        break;
      }
    }
    if (!bool) {
      roomlength.push(end);
    }
  }
  return roomlength.length;
}
