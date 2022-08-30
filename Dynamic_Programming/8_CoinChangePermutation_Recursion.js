const main = () => {
  let input = 5;
  let arr = [2, 3, 5, 6];
  let target = 7;

  // const ans = coinChangePermutationRecursion(arr, target);
  const ans = coinChangePermutationMemoization(arr, target, new Array(target + 1).fill(0));
  console.log(ans)
}

const coinChangePermutationRecursion = (coins, target) => {

  if (target == 0) {
    return 1;
  }

  let value = 0;

  for (let i = 0; i < coins.length; i++) {
    if (target - coins[i] >= 0) {
      value += coinChangePermutationRecursion(coins, target - coins[i])
    }
  }

  return value
}




const coinChangePermutationMemoization = (coins, target, dp) => {

  if (target == 0) {
    return 1;
  }
  if (dp[target] != 0) {
    return dp[target]
  }

  let value = 0;

  for (let i = 0; i < coins.length; i++) {
    if (target - coins[i] >= 0) {
      value += coinChangePermutationMemoization(coins, target - coins[i], dp)
    }
  }

  return dp[target] = value
}
main()