const main = () => {
  let arr = new Array(6).fill(0).map(val => {
    return new Array(6).fill(0)
  })
  console.log(arr)

  let idx = 0;
  let inputArr = [0, 1, 4, 2, 8, 2, 4, 3, 6, 5, 0, 4, 1, 2, 4, 1, 4, 6, 2, 0, 7, 3, 2, 2, 3, 1, 5, 9, 2, 4, 2, 7, 0, 8, 5, 1]
  // let inputArr = [1, 1, 1, 1, 1, 1, 1, 2, 1]

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      arr[i][j] = inputArr[idx];
      idx++
    }
  }
  console.log(arr)

  const ans = minCostPathRecursion(arr, 0, 0);
  console.log(ans)
}
const minCostPathRecursion = (arr, row, col) => {
  if (row == arr.length - 1 && col == arr[0].length - 1) {
    return arr[row][col];
  }

  let rightVal = Number.MAX_SAFE_INTEGER;
  let downVal = Number.MAX_SAFE_INTEGER;
  
  if (row + 1 < arr.length) {
    rightVal = minCostPathRecursion(arr, row + 1, col)
  }

  if (col + 1 < arr[0].length) {
    downVal = minCostPathRecursion(arr, row, col + 1)
  }

  let val = Math.min(rightVal, downVal) + arr[row][col]
  return val;

}
























main()