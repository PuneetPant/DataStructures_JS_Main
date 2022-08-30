const main = () => {
  let val = 5;
  let arr = new Array(val + 1).fill(0);
  const ans = climbStairsDP(val, arr);
  console.log(ans)
}

const climbStairsDP = (val, arr) => {
  arr[0] = 1;
  let sumSoFar = 1;
  for (let i = 1; i < arr.length; i++) {
    // Actually for making the base condition 
    if (i <= 3) {
      arr[i] += sumSoFar
      sumSoFar += arr[i]
    } else {
      arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3]
    }

  }

  console.log(arr)
  return arr[arr.length - 1]
}

main()