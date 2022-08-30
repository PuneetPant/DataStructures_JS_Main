const main = () => {
  let value = [15, 14, 10, 45, 30];
  let weight = [2, 5, 1, 3, 4];
  let capacity = 7;

  // Recursion Answer
  // const ans = zeroOneKnapsackRecursion(value, weight, capacity, 0, 0);
  // console.log(ans)

  // Memoization Answer
  // let dp = new Array(value.length).fill(0).map(el => {
  //   return new Array(capacity + 1).fill(0)
  // })
  // console.log(dp)
  // const ans = zeroOneKnapsackMemoization(value, weight, capacity, 0, 0, dp);
  // console.log(ans)
  // console.log(dp)

  // Tabulation Answer
  let dp = new Array(value.length + 1).fill(0).map(el => {
    return new Array(capacity + 1).fill(0)
  })
  const ans = zeroOneKnapsackTabulation(value, weight, capacity, dp)
  console.log(ans)
}

// const zeroOneKnapsackRecursion = (value, weight, capacityLeft, idx, valueSoFar) => {

//   if (idx == weight.length) {
//     return valueSoFar;
//   }

//   if (capacityLeft == 0) {
//     return valueSoFar;
//   }


//   let yesCall = Number.MIN_SAFE_INTEGER;
//   let noCall = Number.MIN_SAFE_INTEGER;

//   if (capacityLeft - weight[idx] >= 0) {
//     yesCall = zeroOneKnapsackRecursion(value, weight, capacityLeft - weight[idx], idx + 1, valueSoFar + value[idx])
//   }

//   noCall = zeroOneKnapsackRecursion(value, weight, capacityLeft, idx + 1, valueSoFar)

//   return Math.max(yesCall, noCall)
// }

const zeroOneKnapsackMemoization = (value, weight, capacityLeft, idx, valueSoFar, dp) => {

  if (idx == weight.length) {
    return valueSoFar;
  }

  if (capacityLeft == 0) {
    return valueSoFar;
  }

  if (dp[idx][capacityLeft] != 0) {
    return dp[idx][capacityLeft]
  }


  let yesCall = Number.MIN_SAFE_INTEGER;
  let noCall = Number.MIN_SAFE_INTEGER;

  if (capacityLeft - weight[idx] >= 0) {
    yesCall = zeroOneKnapsackMemoization(value, weight, capacityLeft - weight[idx], idx + 1, valueSoFar + value[idx], dp)
  }

  noCall = zeroOneKnapsackMemoization(value, weight, capacityLeft, idx + 1, valueSoFar, dp)

  dp[idx][capacityLeft] = Math.max(yesCall, noCall)

  return dp[idx][capacityLeft]
}

const zeroOneKnapsackTabulation = (value, weight, capacity, dp) => {

  for (let row = 1; row < dp.length; row++) {
    for (let col = 1; col < dp[0].length; col++) {
      let idx = row - 1;
      if (col - weight[idx] >= 0) {
        dp[row][col] = Math.max(dp[row - 1][col], dp[row - 1][col - weight[idx]] + value[idx])
      } else {
        dp[row][col] = dp[row - 1][col];
      }
    }
  }
  console.log(dp)
  return dp[dp.length - 1][dp[0].length - 1]
}

main()