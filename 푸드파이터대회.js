function solution(food) {
  const answer = food.reverse().reduce((a, c, i) => {
    const foodNum = (food.length - i - 1).toString();
    // console.log(foodNum, a, c, i);
    const repeatFood = foodNum.repeat(c / 2);
    return repeatFood + a + repeatFood;
  }, "0");
  return answer;
}

let food = [
  1,
  ...Array.from({ length: 9 }, () => Math.floor(Math.random() * 1000)),
];
console.time("solution");
console.log(solution(food));
console.timeEnd("solution");
