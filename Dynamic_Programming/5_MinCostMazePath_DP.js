const main = () => {
  let arr = new Array(6).fill(0).map(val => {
    return new Array(6).fill(0)
  })

  // for taking input
  let idx = 0;
  let inputArr = [0, 1, 4, 2, 8, 2, 4, 3, 6, 5, 0, 4, 1, 2, 4, 1, 4, 6, 2, 0, 7, 3, 2, 2, 3, 1, 5, 9, 2, 4, 2, 7, 0, 8, 5, 1]
  // let inputArr = [1, 1, 1, 1, 1, 1, 1, 2, 1]

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      arr[i][j] = inputArr[idx];
      idx++
    }
  }

  const ans = minCostPathDP(arr);
  console.log(ans)
}

const minCostPathDP = (arr) => {

  for (let row = arr.length - 1; row >= 0; row--) {
    for (let col = arr[0].length - 1; col >= 0; col--) {

      if (row == arr.length - 1 && col == arr[0].length - 1) {
        arr[row][col] = arr[row][col]
      } else if (row == arr.length - 1) {
        arr[row][col] += arr[row][col + 1]
      } else if (col == arr[0].length - 1) {
        arr[row][col] += arr[row + 1][col]
      } else {
        arr[row][col] += Math.min(arr[row + 1][col], arr[row][col + 1])
      }

    }
  }
  console.log(arr)
  return arr[0][0]

}

main()