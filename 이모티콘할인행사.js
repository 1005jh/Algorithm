// 전체를 돌면서 조건에 맞는 이모티콘 구매
// 구매합계가 기준 이상이면 구매 취소, 플러스 가입
// 기준치 미달이면 판매액+=구매티콘금액
// users 원소는 [비율,가격]
// 마지막으로 => 가입자 수가 많은 것,가입자 수가 같을 때 매출액이 가장 큰 경우로
function solution(users, emoticons) {
  var answer = [];

  const discounts = [10, 20, 30, 40];
  let max_sub = 0;
  let max_sale = 0;
  function dfs(depth, discountArr) {
    if (depth === emoticons.length) {
      let subscriber = 0;
      let sales = 0;

      for (const [rate, priceLimit] of users) {
        let total = 0;

        for (let i = 0; i < emoticons.length; i++) {
          if (discountArr[i] >= rate) {
            total += (emoticons[i] * (100 - discountArr[i])) / 100;
          }
        }

        if (total >= priceLimit) {
          subscriber++;
        } else {
          sales += total;
        }
      }

      if (
        subscriber > max_sub ||
        (subscriber === max_sub && sales > max_sale)
      ) {
        max_sub = subscriber;
        max_sale = sales;
        m;
      }

      return;
    }

    for (const d of discounts) {
      discountArr[depth] = d;
      // console.log(depth, discountArr)
      dfs(depth + 1, discountArr);
    }
  }

  dfs(0, new Array(emoticons.length));

  return [max_sub, max_sale];
}

// dfs(0)
//  ├─ 10
//  │   ├─ [10,10]
//  │   ├─ [10,20]
//  │   ├─ [10,30]
//  │   └─ [10,40]
//  │
//  ├─ 20
//  │   ├─ [20,10]
//  │   ├─ [20,20]
//  │   ├─ [20,30]
//  │   └─ [20,40]
//  │
