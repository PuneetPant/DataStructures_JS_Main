const flatten = (arr) => {
  let ans = [];
  const convert = (arr) => {
    arr.forEach((element) => {
      if (!Array.isArray(element)) {
        ans.push(element);
      } else {
        convert(element);
      }
    });
  };
  convert(arr);
  console.log(ans);
  return ans;
};

// Single-level arrays are unaffected
flatten([1, 2, 3]); // [1, 2, 3]

// Inner arrays are flattened into a single level
flatten([1, [2, 3]]); // [1, 2, 3]
flatten([
  [1, 2],
  [3, 4],
]); // [1, 2, 3, 4]

// Flattens recursively
flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]
