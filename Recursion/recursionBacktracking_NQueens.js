

const main = () => {
  let n = 4;
  let arr = new Array(n).fill(0).map(() => {
    return new Array(n).fill(0)
  })

  NQueens(arr, 0, '')
}

const NQueens = (arr, row, ansSoFar) => {

  if (row == arr.length) {
    console.log(ansSoFar)
    return;
  }

  for (let col = 0; col < arr[0].length; col++) {
    if (isItASafePlace(arr, row, col)) {
      arr[row][col] = 1;
      NQueens(arr, row + 1, ansSoFar + `${row}-${col} `)
      arr[row][col] = 0
    }

  }
}

const isItASafePlace = (arr, row, col) => {

  // check left diagnal
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (arr[i][j] == 1) {
      return false
    }
  }

  // check upwards
  for (let i = row - 1, j = col; i >= 0; i--) {
    if (arr[i][j] == 1) {
      return false
    }
  }

  // check right diagnal
  for (let i = row - 1, j = col + 1; i >= 0 && j < arr[0].length; i--, j++) {
    if (arr[i][j] == 1) {
      return false
    }
  }

  return true;

}

main()
