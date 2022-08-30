const main = () => {
  let n = 10;
  let jumpArr = [3, 3, 0, 2, 1, 2, 4, 2, 0, 0];
  let dp = new Array(jumpArr.length + 1).fill(Number.MAX_SAFE_INTEGER)
  const ans = climbStairsMinimumMovesDP(jumpArr, dp)
  console.log(ans)
}

const climbStairsMinimumMovesDP = (jumpArr, dp) => {

  // base condition
  dp[dp.length - 1] = 0;

  for (let i = jumpArr.length - 1; i >= 0; i--) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 1; j <= jumpArr[i]; j++) {
      if (i + j <= dp.length - 1) {
        min = Math.min(min, dp[i + j])

      }
    }
    dp[i] = min + 1
  }

  console.log(dp)
  return dp[0] == (Number.MAX_SAFE_INTEGER + 1) ? null : dp[0]
}
main()


