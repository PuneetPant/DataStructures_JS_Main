let arr = [[2, 8, 10], [34], [45, 31, 25, 64, 72, 88], [], [25, 73]];

// flatten the 2d array

let farr = arr.reduce(function (pv, cv) {
  return pv.concat(cv);
})
console.log(farr);