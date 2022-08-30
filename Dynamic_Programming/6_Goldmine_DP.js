const main = () => {
  let arr = new Array(6).fill(0).map(val => {
    return new Array(6).fill(0)
  })

  let idx = 0;
  let inputArr = [0, 1, 4, 2, 8, 2, 4, 3, 6, 5, 0, 4, 1, 2, 4, 1, 4, 6, 2, 0, 7, 3, 2, 2, 3, 1, 5, 9, 2, 4, 2, 7, 0, 8, 5, 1]

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      arr[i][j] = inputArr[idx];
      idx++
    }
  }
  console.log(arr)

  const ans = goldmineDP(arr);
  console.log(ans)
}

const goldmineDP = (arr) => {

  for (let col = arr[0].length - 2; col >= 0; col--) {
    for (let row = 0; row < arr.length; row++) {
      if (row == 0) {
        arr[row][col] += Math.max(arr[row][col + 1], arr[row + 1][col + 1])
      } else if (row == arr.length - 1) {
        arr[row][col] += Math.max(arr[row - 1][col + 1], arr[row][col + 1])
      } else {
        arr[row][col] += Math.max(arr[row - 1][col + 1], Math.max(arr[row][col + 1], arr[row + 1][col + 1]))
      }
    }
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let row = 0; row < arr.length; row++) {
    if (arr[row][0] > max) {
      max = arr[row][0]
    }
  }
  console.log(arr)
  return max


}








main()