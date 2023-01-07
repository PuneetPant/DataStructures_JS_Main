const rangeAdditon = (len, query) => {
  let arr = new Array(len + 1).fill(0);
  for (let row = 0; row < query.length; row++) {
    let startIndex = query[row][0];
    let endIndex = query[row][1] + 1;
    let inc = query[row][2];

    arr[startIndex] = arr[startIndex] + inc;
    arr[endIndex] = arr[endIndex] + -inc;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    arr[i] = sum;
  }
  return arr.splice(0, arr.length - 1);
};

const containerWithMostWater = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  let ans = 0;
  let width = arr.length - 1;
  while (i < j) {
    let length = Math.min(arr[i], arr[j]);
    let val = length * width;
    if (val > ans) {
      ans = val;
    }
    width--;

    if (arr[i] <= arr[j]) {
      i++;
    } else {
      j--;
    }
  }
  return ans;
};

var sortedSquares = function (nums) {
  nums = nums.map((element) => {
    return element * element;
  });
  let ans = new Array(nums.length).fill(0);
  let idx = ans.length - 1;
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (nums[i] >= nums[j]) {
      ans[idx] = nums[i];
      i++;
    } else {
      ans[idx] = nums[j];
      j--;
    }
    idx--;
  }
  return ans;
};

var transposeMatrixNCrossN = (arr) => {
  var swap = (arr, i, j) => {
    let temp = arr[i][j];
    arr[i][j] = arr[j][i];
    arr[j][i] = temp;
  };
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < row; col++) {
      swap(arr, row, col);
    }
  }
  return arr;
};
// O(n) Solution
var findUnsortedSubarray = function (arr) {
  let rm = new Array(arr.length).fill(0); // right min
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = arr.length - 1; i >= 0; i--) {
    min = Math.min(min, arr[i]);
    rm[i] = min;
  }
  let lm = new Array(arr.length).fill(0); // left max
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    lm[i] = max;
  }

  let si = -1;
  let ei = 0;
  for (let i = 0; i < arr.length; i++) {
    let lv = lm[i];
    let rv = rm[i];
    let val = arr[i];
    if (val == lv && val == rv) {
      continue;
    } else {
      if (si == -1) {
        si = i;
        ei = i + 1;
      } else {
        ei = i;
      }
    }
  }

  return si == -1 ? 0 : ei - si + 1;
};
// O(nlogn) complexity.
var findUnsortedSubarray = function (nums) {
  let arr = [...nums];
  arr.sort((a, b) => {
    return a - b;
  });
  // find start index
  let si = Number.MAX_SAFE_INTEGER;
  let ei = 0;
  for (let i = 0; i < arr.length; i++) {
    if (nums[i] != arr[i]) {
      si = i;
      break;
    }
  }
  // find last index
  for (let i = arr.length - 1; i > si; i--) {
    if (nums[i] != arr[i]) {
      ei = i;
      break;
    }
  }

  return ei == 0 ? 0 : ei - si + 1;
};

const swap = (arr, row, col) => {
  let temp = arr[row][col];
  arr[row][col] = arr[col][row];
  arr[col][row] = temp;
};

const transpose = (arr) => {
  for (let row = 1; row < arr.length; row++) {
    for (let col = 0; col < row; col++) {
      swap(arr, row, col);
    }
  }
};

const reverseArrayColumnWise = (arr) => {
  let sc = 0; // starting column
  let ec = arr[0].length - 1; // ending column
  while (sc < ec) {
    for (let row = 0; row < arr.length; row++) {
      let temp = arr[row][sc];
      arr[row][sc] = arr[row][ec];
      arr[row][ec] = temp;
    }
    sc++;
    ec--;
  }
};
var rotate = function (arr) {
  transpose(arr);
  reverseArrayColumnWise(arr);
};
const wiggleSort1 = (arr) => {
  arr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < arr.length; i += 2) {
    if (i + 1 < arr.length) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
};

const wiggleSort1Optimized = (arr) => {
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  for (let i = 0; i < arr.length - 1; i++) {
    if (i % 2 == 0) {
      if (arr[i + 1] < arr[i]) {
        swap(arr, i, i + 1);
      }
    } else {
      if (arr[i + 1] > arr[i]) {
        swap(arr, i, i + 1);
      }
    }
  }
  console.log(arr);
};
const isValid = (arr, row, col) => {
  if (row >= 0 && row < arr.length && col >= 0 && col < arr[0].length) {
    return true;
  }
  return false;
};

var maxAreaOfIsland = function (arr) {
  let maxArea = 0;
  let newArea = 0;

  const getAreaOfConnectedIslands = (arr, row, col) => {
    arr[row][col] = 0;
    if (isValid(arr, row - 1, col) && arr[row - 1][col] == 1) {
      newArea++;
      getConnectedIslands(arr, row - 1, col);
    }
    if (isValid(arr, row, col + 1) && arr[row][col + 1] == 1) {
      newArea++;
      getConnectedIslands(arr, row, col + 1);
    }
    if (isValid(arr, row + 1, col) && arr[row + 1][col] == 1) {
      newArea++;
      getConnectedIslands(arr, row + 1, col);
    }
    if (isValid(arr, row, col - 1) && arr[row][col - 1] == 1) {
      newArea++;
      getConnectedIslands(arr, row, col - 1);
    }
  };

  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[0].length; col++) {
      if (arr[row][col] == 1) {
        // console.log('called: ')
        newArea = 1;
        getAreaOfConnectedIslands(arr, row, col);
        // console.log(newArea)
        maxArea = Math.max(maxArea, newArea);
      }
    }
  }
  return maxArea;
};
var fourSum = function (arr, target) {
  arr.sort((a, b) => {
    return a - b;
  });
  let result = [];
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      let lo = j + 1;
      let hi = arr.length - 1;
      while (lo < hi) {
        let sum = arr[i] + arr[j] + arr[lo] + arr[hi];
        if (sum == target) {
          let key =
            arr[i].toString() +
            arr[j].toString() +
            arr[lo].toString() +
            arr[hi].toString();
          if (!map.has(key)) {
            map.set(key, true);
            result.push([arr[i], arr[j], arr[lo], arr[hi]]);
          }
          while (lo < hi && arr[lo] == arr[lo + 1]) {
            lo++;
          }
          while (lo < hi && arr[hi] == arr[hi - 1]) {
            hi--;
          }
          lo++;
          hi--;
        } else if (sum > target) {
          hi--;
        } else {
          lo++;
        }
      }
    }
  }
  console.log(result);
};
var furthestBuilding = function (heights, bricks, ladders) {
  // let len = heights.length - 1,
  //      pq = new MinPriorityQueue({priority: x => x})
  //  for (let i = 0; i < len; i++) {
  //      let diff = heights[i+1] - heights[i]
  //      if (diff > 0) {
  //          if (ladders> 0) {
  //              pq.enqueue(diff)
  //              ladders--
  //          }
  //          else if (pq.front() && diff > pq.front().element){
  //              pq.enqueue(diff);
  //              bricks -= pq.dequeue().element
  //          }
  //          else{
  //             bricks -= diff
  //          }
  //          if (bricks < 0) {
  //              return i
  //          }
  //      }
  //  }
  //  return len

  let pq = new MaxPriorityQueue({ priority: (x) => x });
  for (let i = 0; i < heights.length - 1; i++) {
    if (heights[i] >= heights[i + 1]) {
      continue;
    }
    bricks -= heights[i + 1] - heights[i];
    pq.enqueue(heights[i + 1] - heights[i]);

    if (bricks < 0) {
      bricks += pq.front().element;
      if (ladders > 0) {
        ladders--;
      } else {
        return i;
      }
    }
  }
  return heights.length - 1;
};
export const main = () => {
  // console.log(
  // rangeAdditon(5, [
  //   [1, 3, 2],
  //   [2, 4, 3],
  //   [0, 2, -2],
  // ])
  // );
  // console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
  // console.log(
  //   transposeMatrixNCrossN([
  //     [11, 12, 13],
  //     [21, 22, 23],
  //     [31, 32, 33],
  //   ])
  // );
  // wiggleSort1Optimized([3, 5, 2, 1, 6, 4]);
  fourSum([1, 0, -1, 0, -2, 2], 0);
};
main();
