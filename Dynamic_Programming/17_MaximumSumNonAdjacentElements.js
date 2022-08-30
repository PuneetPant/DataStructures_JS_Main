const main = () => {
  const arr = [5, 10, 10, 100, 5, 6];
  const ans = maximumSumNonAdjacentElementsTabulation(arr);
  console.log(ans)
}

const maximumSumNonAdjacentElementsTabulation = (arr) => {
  let dp = new Array(arr.length).fill(0).map(el => {
    return new Array(2).fill(0)
  })

  dp[0][0] = arr[0];

  for (let row = 1; row < dp.length; row++) {
    for (let col = 0; col < dp[0].length; col++) {
      if (col == 0) {
        dp[row][col] = arr[row] + dp[row - 1][col + 1]
      } else {
        dp[row][col] = Math.max(dp[row - 1][col - 1], dp[row - 1][col])
      }
    }
  }
  console.log(dp)
  return Math.max(dp[dp.length - 1][0], dp[dp.length - 1][1])
}

main()