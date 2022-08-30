const main = () => {
  const arr = [
    [1, 5, 7],
    [5, 8, 4],
    [3, 2, 9],
    [1, 2, 4]
  ]

  const ans = paintHouseTabulation(arr)
  console.log(ans)

}

const paintHouseTabulation = (arr) => {
  for (let row = 1; row < arr.length; row++) {
    for (let col = 0; col < arr[0].length; col++) {
      // applying red 
      if (col == 0) {
        arr[row][col] += Math.min(arr[row - 1][col + 1], arr[row - 1][col + 2])
      }
      // applying blue
      else if (col == 1) {
        arr[row][col] += Math.min(arr[row - 1][col - 1], arr[row - 1][col + 1])
      }
      // applying green
      else {
        arr[row][col] += Math.min(arr[row - 1][col - 2], arr[row - 1][col - 1])
      }
    }
  }

  console.log(arr)

  return Math.min(arr[arr.length - 1][0], Math.min(arr[arr.length - 1][1], arr[arr.length - 1][2]))
}

main()