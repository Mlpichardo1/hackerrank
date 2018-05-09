function factorial(n) {
  var result = 1;
  var count;
  for (count = n; count > 1; count--) {
    result *= count;
  }
  return result;
}
