// function sum(value) {
//   return function (num) {
//     if (typeof num !== 'undefined') {
//       return sum(value + num)
//     } else {
//       return value
//     }
//   }
// }
const sum = (value) => {
  let total = value; // 1) capture initial value in a closure
  function helper(next) {
    // 2) the function you'll keep calling
    if (next === undefined) {
      // 3) stop condition: empty call -> return result
      return total;
    }
    total += next; // 4) accumulate
    return helper; // 5) return the same function to allow chaining
  }
  return helper; // 6) first call gives you 'helper'
};

const ans = sum(1)(); // 1
console.log(ans);
console.log(sum(1)(2)()); // 3
// sum(1)(2)(-3)(); // 0
