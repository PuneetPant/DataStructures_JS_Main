const main = () => {
  let n = 10;
  let jumpArr = [3, 3, 0, 2, 1, 2, 4, 2, 0, 0];
  let dp = new Array(jumpArr.length + 1).fill(0)
  const ans = climbStairsMinimumMovesMemo(0, n, jumpArr, dp)
  console.log(ans)
}

const climbStairsMinimumMovesMemo = (idx, n, jumpArr, dp) => {
  if (idx == n) {
    return 0;
  }
  if (dp[idx] != 0) {
    return dp[idx]
  }

  let count = Number.MAX_SAFE_INTEGER;
  let comparePath;
  for (let i = 1; i <= jumpArr[idx]; i++) {
    if (idx + i <= n) {
      comparePath = climbStairsMinimumMovesMemo(idx + i, n, jumpArr, dp)
    }
    if (comparePath < count) {
      count = comparePath
    }
  }

  dp[idx] = count + 1;

  return count + 1;

}

main()