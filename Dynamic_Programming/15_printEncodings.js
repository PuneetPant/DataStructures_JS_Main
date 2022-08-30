const main = () => {
  let val = '12323'
  // const ans = printEncodingsRecursion(val, '');

  let dp = new Array(val.length + 1).fill(0)
  const ans = printEncodingsMemoization(val, 0, dp);
  console.log(ans)
  console.log(dp)
}

const printEncodingsRecursion = (str, asf) => {
  if (str.length == 0) {
    // console.log(asf)
    return 1;
  }

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str.slice(0, i + 1);
    let remStr = str.substring(i + 1);

    if (ch == '0') {
      return;
    }

    if (ch.length <= 2 && parseInt(ch) <= 26) {
      let getAlphabetsFromNumber = String.fromCharCode(parseInt(ch) + 96);
      count += printEncodingsRecursion(remStr, asf + getAlphabetsFromNumber);
    }
  }

  return count
}

const printEncodingsMemoization = (str, indx, dp) => {
  if (str.length == 0) {
    // console.log(asf)
    return dp[str.length] = 1
  }

  if (dp[str.length] != 0) {
    return dp[str.length]
  }

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str.slice(0, i + 1);
    let remStr = str.substring(i + 1);

    if (ch == '0') {
      return;
    }

    if (ch.length <= 2 && parseInt(ch) <= 26) {
      count += printEncodingsMemoization(remStr, i + 1, dp);
    }
  }

  return dp[str.length] = count
}
main();