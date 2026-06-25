const flatten = (arr) => {
  let ans = [];

  const convert = (arr) => {
    console.log("arr: ", arr)
    if (!Array.isArray(arr)) {
      ans.push(arr);
      return;
    }
    arr.forEach(item => {
      convert(item);
    })
  }

  convert(arr);
  console.log("ans: ", ans);
  console.log('--------------')
}



// Single-level arrays are unaffected.
// flatten([1, 2, 3]); // [1, 2, 3]

// Inner arrays are flattened into a single level.
flatten([1, [2, 3]]); // [1, 2, 3]
flatten([
  [1, 2],
  [3, 4],
]); // [1, 2, 3, 4]

// Flattens recursively.
flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]
