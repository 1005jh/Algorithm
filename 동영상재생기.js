function solution(video_len, pos, op_start, op_end, commands) {
  var answer = "";
  const toSeconds = (time) => {
    const [minutes, seconds] = time.split(":").map(Number);
    return minutes * 60 + seconds;
  };
  const toTimeString = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };
  const videoLength = toSeconds(video_len);
  const start = toSeconds(op_start);
  const end = toSeconds(op_end);
  let current = toSeconds(pos);
  const skipOpening = () => {
    if (start <= current && current <= end) {
      current = end;
    }
  };
  skipOpening();
  for (const command of commands) {
    if (command === "prev") {
      current = Math.max(0, current - 10);
    }
    if (command === "next") {
      current = Math.min(videoLength, current + 10);
    }
    skipOpening();
  }
  return toTimeString(current);
}
