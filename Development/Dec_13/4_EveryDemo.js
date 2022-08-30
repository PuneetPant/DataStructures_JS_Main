let arr = [
  { name: 'A', age: 14, gender: 'M' },
  { name: 'b', age: 34, gender: 'M' },
  { name: 'c', age: 34, gender: 'F' },
  { name: 'd', age: 44, gender: 'F' },
  { name: 'e', age: 44, gender: 'M' },
  { name: 'f', age: 28, gender: 'F' },
  { name: 'g', age: 36, gender: 'M' }
]

// 1) 'Every' returns true of false

// 2) if every callback returns true then 'Every' returns true otherwise false

Array.prototype.myEvery = function (cb) {
  let oarr = this;

  for (let i = 0; i < oarr.length; i++) {
    let v = oarr[i];
    let rv = cb(v, i, oarr);

    if (rv == false) {
      return false
    }
  }
  return true;
}

let ans = arr.myEvery(function (v, i, oarr) {
  if (v.age < 50) {
    return true
  } else {
    return false
  }
})
console.log(ans);