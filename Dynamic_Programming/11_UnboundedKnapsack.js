const main = () => {
  let value = [15, 14, 10, 45, 30];
  let weight = [2, 5, 1, 3, 4];
  let capacity = 7;

  // const ans = unboundedKnapsackRecursion(value, weight, 0, capacity, 0)
  // console.log(ans)

  const ans = unboundedKnapsackTabulation(value, weight, capacity)
  console.log(ans)
}

const unboundedKnapsackRecursion = (value, weight, idx, capacityLeft, valueSoFar) => {

  if (idx == weight.length) {
    return valueSoFar
  }

  if (capacityLeft == 0) {
    return valueSoFar
  }


  let yesCall = 0;
  let noCall = 0;

  if (capacityLeft - weight[idx] >= 0) {
    yesCall = unboundedKnapsackRecursion(value, weight, idx, capacityLeft - weight[idx], valueSoFar + value[idx]);
  }

  noCall = unboundedKnapsackRecursion(value, weight, idx + 1, capacityLeft, valueSoFar);

  return Math.max(yesCall, noCall)
}


const unboundedKnapsackTabulation = (value, weight, capacity) => {
  let dp = new Array(weight.length + 1).fill(0).map(el => {
    return new Array(capacity + 1).fill(0)
  })

  for (let row = 1; row < dp.length; row++) {
    let idx = row - 1;
    for (let col = 1; col < dp[0].length; col++) {
      if (col - weight[idx] >= 0) {
        dp[row][col] = Math.max(dp[row][col - weight[idx]] + value[idx], dp[row - 1][col])
      } else {
        dp[row][col] = dp[row - 1][col]
      }
    }
  }

  console.log(dp)
  return dp[dp.length - 1][dp[0].length - 1]
}
main()