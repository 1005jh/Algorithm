// 연산자 같은 등급은 존재할 수 없음

function solution(expression) {
  const numbers = expression.split(/[\+\-\*]/).map(Number);
  const operators = expression.split(/[0-9]+/).filter((v) => v);

  const opTypes = [...new Set(operators)];

  // 순열 생성 함수
  function getPermutations(arr, select) {
    if (select === 1) return arr.map((v) => [v]);

    const result = [];
    arr.forEach((fixed, idx) => {
      const rest = arr.filter((_, i) => i !== idx);
      const perms = getPermutations(rest, select - 1);
      perms.forEach((p) => {
        result.push([fixed, ...p]);
      });
    });
    return result;
  }

  const permutations = getPermutations(opTypes, opTypes.length);

  let max = 0;

  function calc(a, b, op) {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
  }

  permutations.forEach((order) => {
    let nums = [...numbers];
    let ops = [...operators];

    order.forEach((op) => {
      for (let i = 0; i < ops.length; ) {
        if (ops[i] === op) {
          const result = calc(nums[i], nums[i + 1], op);

          nums.splice(i, 2, result);
          ops.splice(i, 1);
        } else {
          i++;
        }
      }
    });

    max = Math.max(max, Math.abs(nums[0]));
  });

  return max;
}

// 순열 생성 함수  ****
function getPermutations(arr, select) {
  if (select === 1) return arr.map((v) => [v]);

  const result = [];
  arr.forEach((fixed, idx) => {
    const rest = arr.filter((_, i) => i !== idx);
    const perms = getPermutations(rest, select - 1);
    perms.forEach((p) => {
      result.push([fixed, ...p]);
    });
  });
  return result;
}

// todo 이틀 뒤 다시풀기 복잡하게 생각하지 말고 차근차근
