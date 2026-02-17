function aa() {
  var values = [];
  values.push(1);
  fun: {
    values.push(2);
    break fun;
    values.push(3);
  }
  values.push(4);
  return values;
}
aa();
