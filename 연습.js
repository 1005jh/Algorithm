function isBigEnough(value) {
  return value !== 4;
}

var filtered = [1,2,3,4,5,6].filter(isBigEnough);
console.log(filtered)