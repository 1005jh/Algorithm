// 각 집에 배달받을 택배/수거해야할 택배 가 존재
// cap용량만큼 배달/수거 가능
// 배달과 수거를 뒤에서부터 확인, 가장 먼 집(index+1)*2로 집계(왕복)
// 필요없는 집은 제외하고 계산해야함
function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  let deliveriesIdx = n - 1;
  let pickupsIdx = n - 1;
  while (0 <= deliveriesIdx || 0 <= pickupsIdx) {
    while (0 <= deliveriesIdx && deliveries[deliveriesIdx] === 0) {
      deliveriesIdx--;
    }
    while (0 <= pickupsIdx && pickups[pickupsIdx] === 0) {
      pickupsIdx--;
    }
    if (deliveriesIdx < 0 && pickupsIdx < 0) break;
    // 배달/수거
    answer += (Math.max(deliveriesIdx, pickupsIdx) + 1) * 2;
    console.log("123", answer);
    let deliveriesCap = cap;
    let pickupsCap = cap;
    while (0 <= deliveriesIdx) {
      if (deliveries[deliveriesIdx] <= cap) {
        deliveries[deliveriesIdx] = 0;
        deliveriesIdx--;
      } else deliveries[deliveriesIdx] -= cap;
    }

    while (0 <= pickupsIdx) {
      if (pickups[pickupsIdx] <= cap) {
        pickups[pickupsIdx] = 0;
        pickupsIdx--;
      } else pickups[pickupsIdx] -= cap;
    }
  }
  return answer;
}
//todo : 20,27에 cap이 연속사용됨 제약조건필요
// 각 집에 배달받을 택배/수거해야할 택배 가 존재
// cap용량만큼 배달/수거 가능
// 배달과 수거를 뒤에서부터 확인, 가장 먼 집(index+1)*2로 집계(왕복)
// 필요없는 집은 제외하고 계산해야함
function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  let deliveriesIdx = n - 1;
  let pickupsIdx = n - 1;
  while (0 <= deliveriesIdx || 0 <= pickupsIdx) {
    while (0 <= deliveriesIdx && deliveries[deliveriesIdx] === 0) {
      deliveriesIdx--;
    }
    while (0 <= pickupsIdx && pickups[pickupsIdx] === 0) {
      pickupsIdx--;
    }
    if (deliveriesIdx < 0 && pickupsIdx < 0) break;
    // 배달/수거
    answer += (Math.max(deliveriesIdx, pickupsIdx) + 1) * 2;
    let deliveriesCap = cap;
    let pickupsCap = cap;
    while (0 <= deliveriesIdx && 0 < deliveriesCap) {
      if (deliveries[deliveriesIdx] <= deliveriesCap) {
        deliveriesCap -= deliveries[deliveriesIdx];
        deliveries[deliveriesIdx] = 0;
        deliveriesIdx--;
      } else {
        deliveries[deliveriesIdx] -= deliveriesCap;
        deliveriesCap = 0;
      }
    }

    while (0 <= pickupsIdx && 0 < pickupsCap) {
      if (pickups[pickupsIdx] <= pickupsCap) {
        pickupsCap -= pickups[pickupsIdx];
        pickups[pickupsIdx] = 0;
        pickupsIdx--;
      } else {
        pickups[pickupsIdx] -= pickupsCap;
        pickupsCap = 0;
      }
    }
  }
  return answer;
}

// 수학적풀이
function solution(cap, n, deliveries, pickups) {
  let answer = 0;

  let deliverySum = 0;
  let pickupSum = 0;

  let prevTrips = 0; // 이전 위치까지 필요했던 왕복 횟수

  for (let i = n - 1; i >= 0; i--) {
    deliverySum += deliveries[i];
    pickupSum += pickups[i];

    const needTrips = Math.max(
      Math.ceil(deliverySum / cap),
      Math.ceil(pickupSum / cap),
    );

    const additionalTrips = needTrips - prevTrips;

    if (additionalTrips > 0) {
      answer += (i + 1) * 2 * additionalTrips;
      prevTrips = needTrips;
    }
  }

  return answer;
}
