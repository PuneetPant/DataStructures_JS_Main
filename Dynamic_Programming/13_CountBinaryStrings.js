const main = () => {
  let n = 6;

  // const ans = countBinaryStringsRecursion(n, 0, '');
  // console.log(ans)

  const ans = countBinaryStringsTabulation(n);
  console.log(ans)
}

const countBinaryStringsRecursion = (n, idx, ansSoFar) => {

  if (idx == n) {
    console.log(ansSoFar)
    return 1;
  }

  let yesCall = 0; // yes call means taking 1
  let noCall = 0; // no call means taking 0
  if (idx == 0 || ansSoFar[ansSoFar.length - 1] == '1') {
    yesCall = countBinaryStringsRecursion(n, idx + 1, ansSoFar + '1')
    noCall = countBinaryStringsRecursion(n, idx + 1, ansSoFar + '0')
  } else {
    yesCall = countBinaryStringsRecursion(n, idx + 1, ansSoFar + '1')
  }

  return yesCall + noCall;
}

const countBinaryStringsTabulation = (n) => {
  const dp = new Array(n + 1).fill(0).map(el => {
    return new Array(2).fill(0);
  })

  // Base Case
  dp[0][0] = 1;
  dp[0][1] = 1;

  for (let row = 1; row < dp.length; row++) {
    for (let col = 0; col < dp[0].length; col++) {
      if (col == 0) {
        dp[row][col] = dp[row - 1][col + 1]
      } else {
        dp[row][col] = dp[row - 1][col - 1] + dp[row - 1][col]
      }
    }
  }

  console.log(dp)

  return dp[dp.length - 1][dp[0].length - 1]
}

main()