const main = () => {
  let value = [15, 14, 10, 45, 30];
  let weight = [2, 5, 1, 3, 4];
  let capacity = 7;
  // const ans = zeroOneKnapsackRecursion(value, weight, capacity, 0, 0);
  // console.log(ans)

  let dp = new Array(value.length).fill(0).map(el => {
    return new Array(capacity + 1).fill(0)
  })
  // console.log(dp)
  const ans = zeroOneKnapsackMemoization(value, weight, capacity, 0, dp);
  console.log(ans)
  console.log(dp)
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

const zeroOneKnapsackMemoization = (value, weight, capacityLeft, idx, dp) => {

  if (idx == weight.length) {
    return 0;
  }

  //   if (capacityLeft == 0) {
  //     return valueSoFar;
  //   }

  if (dp[idx][capacityLeft] != 0) {
    return dp[idx][capacityLeft]
  }


  let yesCall = Number.MIN_SAFE_INTEGER;
  let noCall = Number.MIN_SAFE_INTEGER;

  if (capacityLeft - weight[idx] >= 0) {
    yesCall = value[idx] + zeroOneKnapsackMemoization(value, weight, capacityLeft - weight[idx], idx + 1, dp)
  }

  noCall = zeroOneKnapsackMemoization(value, weight, capacityLeft, idx + 1, dp)

  dp[idx][capacityLeft] = Math.max(yesCall, noCall)

  return dp[idx][capacityLeft]
}

main()