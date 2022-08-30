const main = () => {
  const n = 8;
  const k = 3;

  const ans = paintFenceTabulation(n, k);
  console.log(ans);
}

const paintFenceTabulation = (n, k) => {
  let dp = new Array(2).fill(0).map(el => {
    return new Array(n).fill(0)
  })

  dp[0][1] = 1;
  dp[1][1] = k - 1;

  let row = 0;

  for (let col = 2; col < dp[0].length; col++) {

    // for 0th index
    dp[row][col] = dp[row + 1][col - 1];
    row++;

    // for 1st index
    dp[row][col] = (dp[row - 1][col - 1] * (k - 1)) + (dp[row][col - 1] * (k - 1));
    row--;
  }

  let ansFormed = (dp[0][dp[0].length - 1] + dp[1][dp[0].length - 1]) * k;

  return ansFormed;
}


main()