const main = () => {
  let n = 10;
  let jumpArr = [3, 3, 0, 2, 1, 2, 4, 2, 0, 0];
  let dp = new Array(jumpArr.length + 1).fill(0)
  const ans = climbStairsVariableDP(jumpArr, dp)
  console.log(ans)
}

const climbStairsVariableDP = (jumpArr, dp) => {

  // base condition
  dp[dp.length - 1] = 1;

  for (let i = jumpArr.length - 1; i >= 0; i--) {

    for (let j = 1; j <= jumpArr[i]; j++) {
      if (i + j <= dp.length - 1) {
        dp[i] += dp[i + j]
      }
    }
  }

  console.log(dp)

  return dp[0]
}
main()


