const costFunc = (x, c) => {
  let y = 2;
  let finalAns;
  while (y <= x) {
    let y1 = y;
    let x1 = x;
    while (y1 <= x1) {
      x1 = Math.floor(x1 / y1);
    }
    let ans = x1 + (x % y);
    if (ans == c) {
      finalAns = y;
    }
    console.log("ans: ", ans, x1);
    y++;
  }
  // if()
  return finalAns;
};

const costFunc1 = (x, c) => {
  let y = 2;
  let finalAns = -1;
  while (y <= x) {
    let y1 = y;
    let x1 = x;
    while (y1 <= x1) {
      x1 = Math.floor(x1 / y1);
    }
    let ans = x1 + (x % y);
    if (ans == c) {
      finalAns = y;
      break;
    }
    y++;
  }
  if (x == c && finalAns == -1) {
    return x + 1;
  }
  return finalAns;
};

const main = () => {
  // console.log(costFunc(4, 6));
  console.log(costFunc1(4, 4));
};

main();
