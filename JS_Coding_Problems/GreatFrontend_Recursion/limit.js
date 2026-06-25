const limit = (func, limitVal) => {
  let n = 0;
  let ans;
  return function (...args) {
    if (n < limitVal) {
      n++;
      ans = func.apply(this, args);
      return ans;
    } else {
      return ans;
    }
  }
}