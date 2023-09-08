function limit(func, n) {
  let count = 0;
  let result;
  let th = this;
  return (val) => {
    if (count < n) {
      result = func.call(this, val)
      count++;
    }
    return result;
  }

}
let i = 1;

function incrementBy(value) {
  i += value;
  return i;
}

const incrementByAtMostThrice = limit(incrementBy, 2);
incrementByAtMostThrice(2); // i is now 3; The function returns 3.
console.log(incrementByAtMostThrice(3))
incrementByAtMostThrice(4); // i is now 10; The function returns 10.
incrementByAtMostThrice(5);