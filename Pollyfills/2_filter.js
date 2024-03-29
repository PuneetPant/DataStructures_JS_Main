Array.prototype.myFilter = function (callback) {
  let ans = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      ans.push(this[i]);
    }
  }
  return ans;
};

const main = () => {
  let arr = [1, 2, 3, 4, 5, 6, 67];
  let ans = arr.myFilter((val) => {
    return val % 2 == 0;
  });
  console.log(ans);
};
main();
// Array.prototype.myFilter = function (fn) {
//   let arr = [...this];
//   let ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i])) {
//       ans.push(arr[i])
//     }
//   }
//   return ans;
// }

// Revision :
Array.prototype.myFilter = function (callback) {
  let arr = [...this];
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      ans.push(arr[i])
    }
  }
  return ans;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ans1 = arr.filter((it) => {
  return true;
})
console.log(ans1);
console.log('----------')
let ans = arr.myFilter((val) => {
  return val % 2 === 0;
})
console.log(ans);

