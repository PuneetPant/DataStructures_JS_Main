const main = () => {
  let n = 10;
  let jumpArr = [3, 3, 0, 2, 1, 2, 4, 2, 0, 0];
  const ans = climbStairsVariableJumps(0, n, jumpArr)
  console.log(ans)
}

const climbStairsVariableJumps = (idx, n, jumpArr) => {

  if (idx == n) {
    return 1;
  }
  let count = 0;
  for (let i = 1; i <= jumpArr[idx]; i++) {
    if (idx + i <= n) {
      count += climbStairsVariableJumps(idx + i, n, jumpArr)
    }
  }

  return count;
}
main()