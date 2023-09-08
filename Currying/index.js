function curry(func) {
  debugger;
  function helper(...args) {
    debugger;
    if (args.length >= func.length) {
      console.log(this, args)
      return func.apply(this, args)
    } else {
      return helper.bind(this, ...args)
    }
  }
  return helper
}

function sum(a, b, c) {
  return a + b + c;
}
// console.log(sum.length)

let curriedSum = curry(sum);

let val = curriedSum(1)(2)(3)
console.log("val: ", val)