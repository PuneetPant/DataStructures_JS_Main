Array.prototype.newMap = function (fn) {
  console.log(this);
  let arr = [...this];
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let val = fn(arr[i]);
    ans.push(val);
  }
  return ans;
};

const main = () => {
  let arr = [1, 2, 3, 4];
  let ans = arr.newMap((val) => {
    return val * 2;
  });
  console.log(ans);
};
main();

// Revision :
Array.prototype.newMap = function (callback) {
  let arr = [...this];
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let val = callback(arr[i]);
    ans.push(val);
  }
  return ans;
}
let ans = [1, 2, 3, 4].newMap((val) => {
  return val * 3
})
console.log(ans);
