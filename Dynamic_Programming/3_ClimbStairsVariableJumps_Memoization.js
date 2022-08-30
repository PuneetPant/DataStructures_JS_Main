const main = () => {
  let n = 10;
  let jumpArr = [3, 3, 0, 2, 1, 2, 4, 2, 0, 0];
  let dp = new Array(jumpArr.length).fill(0)
  const ans = climbStairsVariableJumpsMemo(0, n, jumpArr, dp)
  console.log(ans)
}

const climbStairsVariableJumpsMemo = (idx, n, jumpArr, dp) => {

  if (idx == n) {
    return 1;
  }
  if (dp[idx] != 0) {
    return dp[idx]
  }

  let count = 0;
  for (let i = 1; i <= jumpArr[idx]; i++) {
    if (idx + i <= n) {
      count += climbStairsVariableJumpsMemo(idx + i, n, jumpArr, dp)
    }
  }
  dp[idx] = count;

  return count;
}
main()