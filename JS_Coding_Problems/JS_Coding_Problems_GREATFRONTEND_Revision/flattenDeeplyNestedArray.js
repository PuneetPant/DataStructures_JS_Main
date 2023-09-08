var flat = function (arr, n) {
  let ans = [];
  const convert = (arr, flatCount) => {
    console.log(flatCount, arr)
    if (flatCount > n) {
      ans.push(arr);
      return;
    }

    if (!Array.isArray(arr)) {
      ans.push(arr);
      return;
    }

    arr.forEach(it => {
      convert(it, flatCount + 1)
    })
  }

  convert(arr, 0);
  console.log("ans: ", ans)
};

flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
// flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2)