const main = () => {
  let n = 10;
  let jumpArr = [3, 3, 0, 2, 1, 2, 4, 2, 0, 0];
  const ans = climbStairsMinimumMoves(0, n, jumpArr)
  console.log(ans)
}

const climbStairsMinimumMoves = (idx, n, jumpArr) => {
  if (idx == n) {
    return 0;
  }

  let count = Number.MAX_SAFE_INTEGER;
  let comparePath;
  for (let i = 1; i <= jumpArr[idx]; i++) {
    if (idx + i <= n) {
      comparePath = climbStairsMinimumMoves(idx + i, n, jumpArr)
    }
    if (comparePath < count) {
      count = comparePath
    }
  }

  return count + 1;

}

main()