function flatten(value) {
  let ans = [];
  const convert = (arr) => {
    if (!Array.isArray(arr)) {
      ans.push(arr);
      return;
    }
    arr.forEach(it => {
      convert(it)
    })
  }

  convert(value);
  console.log("ans: ", ans)
}


// // Single-level arrays are unaffected.
// flatten([1, 2, 3]); // [1, 2, 3]

// // Inner arrays are flattened into a single level.
// flatten([1, [2, 3]]); // [1, 2, 3]
// flatten([
//   [1, 2],
//   [3, 4],
// ]); // [1, 2, 3, 4]

// // Flattens recursively.
// flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]

// flatten([[[6]], [1, 3], []])
// flatten([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]])
flatten([
  ["$6"],
  ["$12"],
  ["$25"],
  ["$25"],
  ["$18"],
  ["$22"],
  ["$10"]
])