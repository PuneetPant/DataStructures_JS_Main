const isValid = (arr, row, col) => {
  if (row >= 0 && row < arr.length && col >= 0 && col < arr[0].length) {
    return true;
  }
  return false;
};
var countSubIslands = function (grid1, grid2) {
  let subIslandCount = 0;

  const getConnectedIslands = (grid2, grid1, row, col) => {
    if (grid1[row][col] != 1) {
      return false;
    }
    grid1[row][col] = 0;
    grid2[row][col] = 0;
    let flag = true;
    if (isValid(grid2, row - 1, col) && grid2[row - 1][col] == 1 && flag) {
      flag = getConnectedIslands(grid2, grid1, row - 1, col);
    }
    if (isValid(grid2, row, col + 1) && grid2[row][col + 1] == 1 && flag) {
      flag = getConnectedIslands(grid2, grid1, row, col + 1);
    }
    if (isValid(grid2, row + 1, col) && grid2[row + 1][col] == 1 && flag) {
      flag = getConnectedIslands(grid2, grid1, row + 1, col);
    }
    if (isValid(grid2, row, col - 1) && grid2[row][col - 1] == 1 && flag) {
      flag = getConnectedIslands(grid2, grid1, row, col - 1);
    }
    return flag;
  };
  for (let row = 0; row < grid2.length; row++) {
    for (let col = 0; col < grid2[0].length; col++) {
      if (grid2[row][col] == 1) {
        console.log("called: ", row, col);
        let val = getConnectedIslands(grid2, grid1, row, col);
        if (val == true) {
          subIslandCount++;
        }
      }
    }
  }
  return subIslandCount;
};

const main = () => {
  let ans = countSubIslands(
    [
      [1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
    ],
    [
      [1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1],
      [0, 1, 0, 0, 0],
      [1, 0, 1, 1, 0],
      [0, 1, 0, 1, 0],
    ]
  );
  console.log(ans);
};
main();
