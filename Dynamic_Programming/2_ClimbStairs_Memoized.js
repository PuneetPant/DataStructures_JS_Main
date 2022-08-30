const main = () => {
  let val = 5;
  let arr = new Array(val + 1).fill(0);
  const ans = climbStairsMemoized(val, arr);
  console.log(ans)
}

const climbStairsMemoized = (val, arr) => {
  if (val == 0) {
    return 1;
  }

  if (arr[val] != 0) {
    return arr[val];
  }

  let one = 0;;
  let two = 0;
  let three = 0;

  if (val - 1 >= 0) {
    one = climbStairsMemoized(val - 1, arr)
  }

  if (val - 2 >= 0) {
    two = climbStairsMemoized(val - 2, arr)
  }

  if (val - 3 >= 0) {
    three = climbStairsMemoized(val - 3, arr);
  }

  let marr = one + two + three;
  arr[val] = marr;
  console.log(arr)
  return marr;
}

main();