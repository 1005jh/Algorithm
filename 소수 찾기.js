function solution(numbers) {
  var answer = 0;
  let set = new Set();
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  };
  const dfs = (cur, nums) => {
    if (cur !== "") set.add(Number(cur));
    for (let i = 0; i < nums.length; i++) {
      dfs(cur + nums[i], nums.slice(0, i) + nums.slice(i + 1));
    }
  };
  dfs("", numbers);
  for (let num of set) {
    if (isPrime(num)) answer++;
  }
  return answer;
}
