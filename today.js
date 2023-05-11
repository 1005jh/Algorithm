const date = [];
const week = ["일", "월", "화", "수", "목", "금", "토"];
const today = new Date().getDate();
const day = new Date().getDay();
console.log(today, day);
const result = [];
const dates = [];
const days = [];
const istoday = [];
for (let i = -3; i < 7; i++) {
  if (today + i > 31) {
    dates.push(today + i - 31);
    istoday.push(false);
    continue;
  }
  if (day + i > 6) {
    dates.push(today + i);
    istoday.push(false);
    continue;
  }
  if (today + i == 31) {
    dates.push(today + i);
    istoday.push(true);
    continue;
  }
  dates.push(today + i);
  istoday.push(false);
}
for (let i = -3; i < 7; i++) {
  if (day + i > 6) {
    days.push(day + i - 6);
    continue;
  }
  days.push(day + i);
}
dates.map((a, i) => {
  result.push({
    date: dates[i],
    day: week[days[i]],
    istoday: istoday[i],
  });
});

console.log(result);
