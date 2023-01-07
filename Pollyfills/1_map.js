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
