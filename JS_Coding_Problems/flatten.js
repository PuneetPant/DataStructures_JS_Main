const flatten = (arr) => {
  let ans = [];

  const convert = (arr) => {
    if (!Array.isArray(arr)) {
      ans.push(arr);
      return;
    }

    arr.forEach((it) => {
      convert(it);
    });
  };
  convert(arr);
  return ans;
};

const flattenFullRecursive = (arr) => {
  if (!Array.isArray(arr)) {
    return [arr];
  }
  let ans = [];
  arr.forEach((it) => {
    let val = flatten(it);
    console.log("val: ", val);
    ans = [...ans, ...val];
  });
  return ans;
};

let obj = [1, [2, [3, [4, [5]]]]];
let ans = flatten(obj);
console.log(ans);
