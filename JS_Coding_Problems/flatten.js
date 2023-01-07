Object.prototype.flatten = function (obj) {
  let ans = {};
  let anotherObj = { ...obj };
  function performFlatten(anotherObj) {
    Object.keys(anotherObj).forEach((key, idx) => {
      if (typeof anotherObj[key] !== "object") {
        ans[key] = anotherObj[key];
        console.log("ans so far : ", ans);
      } else {
        console.log(key, { ...anotherObj[key] });
        performFlatten(anotherObj[key]);
      }
    });
  }

  performFlatten(anotherObj);

  return ans;
};
let obj = [1, [2, [3, [4, [5]]]]];
let ans = flatten(obj);
console.log(ans);
