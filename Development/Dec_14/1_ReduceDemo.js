let arr = [10, 20, 30, 40, 50];

let sum = arr.reduce(function (pv, cv, ci, oarr) {
  console.log(pv + ' ' + cv + ' ' + ci);
  return pv + cv;
})
console.log(sum);
// pv - previous value
// cv - current value
// ci - current index
// oarr - original array

// pv cv ci
// 10 20 1
// 30 30 2
// 60 40 3
// 100 50 4

// Polyfill for Reduce
let arr = [10, 20, 30, 40, 50];

Array.prototype.myReduce = function (cb, val) {
  let oarr = this;
  let idx = typeof val === 'undefined' ? 1 : 0;
  let pv = typeof val === 'undefined' ? oarr[0] : val;
  let ans = 0;

  while (idx < oarr.length) {
    ans = cb(pv, oarr[idx], idx, oarr);
    pv = ans;
    idx++;
  }
  return ans;
}

let sum = arr.myReduce(function (pv, cv, ci, oarr) {
  return pv + cv;
})
console.log(sum);



