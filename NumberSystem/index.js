const decimalToAnyBase = (number, base) => {
  let ans = [];
  while (number > 0) {
    ans.unshift(number % base);
    number = Math.floor(number / base);
  }
  return ans.join('')
}

const anyBaseToDecimal = (num, base) => {
  let ans = 0;
  let power = 0;
  while (num > 0) {
    let val = num % 10;
    num = Math.floor(num / 10);
    ans += val * Math.pow(base, power)
    // console.log(ans, val, num)
    power++;
  }
  return ans;
}



















const main = () => {
  // console.log(decimalToAnyBase(634, 8));
  console.log(anyBaseToDecimal(1172, 8))
}

main();