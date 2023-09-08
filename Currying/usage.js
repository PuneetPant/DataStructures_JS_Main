// 1. It is used for making HOC
const multiply = (a, b) => {
  return a * b;
}

function curry(func) {
  function helper(...args) {
    if (args.length >= func.length) {
      console.log(this, args)
      return func.apply(this, args)
    } else {
      return helper.bind(this, ...args)
    }
  }
  return helper
}

const curriedMultiply = curry(multiply);
const curriedMultiplyByTwo = curriedMultiply(2);
console.log(curriedMultiplyByTwo(5));