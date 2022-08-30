const main = () => {
  let n = 6;
  let r = 2;
  let c = 0;
  let arr = new Array(n).fill(0).map(() => {
    return new Array(n).fill(0)
  })
  // console.log(arr)

  KnightsTour(arr, r, c, 1);
}


const KnightsTour = (arr, row, col, move) => {

  if (move == arr.length * arr[0].length) {
    arr[row][col] = move;
    console.log(arr)
    arr[row][col] = 0
    return
  }

  arr[row][col] = move;
  
  safeMove(arr, row - 2, col + 1) && KnightsTour(arr, row - 2, col + 1, move + 1)
  safeMove(arr, row - 1, col + 2) && KnightsTour(arr, row - 1, col + 2, move + 1)
  safeMove(arr, row + 1, col + 2) && KnightsTour(arr, row + 1, col + 2, move + 1)
  safeMove(arr, row + 2, col + 1) && KnightsTour(arr, row + 2, col + 1, move + 1)
  safeMove(arr, row + 2, col - 1) && KnightsTour(arr, row + 2, col - 1, move + 1)
  safeMove(arr, row + 1, col - 2) && KnightsTour(arr, row + 1, col - 2, move + 1)
  safeMove(arr, row - 1, col - 2) && KnightsTour(arr, row - 1, col - 2, move + 1)
  safeMove(arr, row - 2, col - 1) && KnightsTour(arr, row - 2, col - 1, move + 1)

  arr[row][col] = 0;
}

const safeMove = (arr, row, col) => {
  // Out of range checks for row and col
  // And Already moved in that square check
  if (row < 0 || col < 0 || row >= arr.length || col >= arr[0].length || arr[row][col] != 0) {
    return false
  }
  return true;
}

main()