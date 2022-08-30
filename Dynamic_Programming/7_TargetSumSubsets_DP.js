const main = () => {
  let input = 5;
  let arr = [4, 2, 1, 3];
  let target = 10;

  const ans = targetSumSubsetsDP(arr, target);
  console.log(ans)
}

const targetSumSubsetsDP = (arr, target) => {
  let dp = new Array(arr.length + 1).fill(false).map(val => {
    return new Array(target + 1).fill(false)
  })
  // console.log(dp)

  for (let row = 0; row < dp.length; row++) {
    for (let col = 0; col < dp[0].length; col++) {
      if (row == 0 && col == 0) {
        dp[row][col] = true;
      } else if (row == 0) {
        dp[row][col] = false
      } else if (col == 0) {
        dp[row][col] = true
      } else {
        let val = arr[row - 1];
        if (col - val >= 0) {
          dp[row][col] = dp[row - 1][col] || dp[row - 1][col - val];
        } else {
          dp[row][col] = dp[row - 1][col]
        }
      }
    }
  }

  console.log(dp)
  return dp[dp.length - 1][dp[0].length - 1]
}
main()