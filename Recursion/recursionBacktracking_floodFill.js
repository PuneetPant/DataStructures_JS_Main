const main = () => {
  let arr = [
    ['0', '0', '0'],
    ['1', '0', '1'],
    ['0', '0', '0'],
  ]
  // let arr = new Array(5).fill(0).map(() => new Array(5)).fill(0)
  floodFill(arr, 0, 0, '')
}


const floodFill = (arr, sr, sc, asf) => {

  if (sr == arr.length - 1 && sc == arr[0].length - 1) {
    console.log(asf)
    return
  }


  // mark
  arr[sr][sc] = 1;

  // top
  if (sr - 1 >= 0 && arr[sr - 1][sc] != 1) {
    floodFill(arr, sr - 1, sc, asf + 'T')
  }

  // right
  if (sc + 1 <= arr[0].length - 1 && arr[sr][sc + 1] != 1) {
    floodFill(arr, sr, sc + 1, asf + 'R')
  }

  // Down
  if (sr + 1 <= arr.length - 1 && arr[sr + 1][sc] != 1) {
    floodFill(arr, sr + 1, sc, asf + 'D')
  }

  //left

  if (sc - 1 >= 0 && arr[sr][sc - 1] != 1) {
    floodFill(arr, sr, sc - 1, asf + 'L')
  }

  arr[sr][sc] = 0;

}

main()

