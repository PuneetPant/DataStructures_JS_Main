const compose = (...args) => {

  return function (val) {
    for (let i = args.length - 1; i >= 0; i--) {
      let fn = args[i];
      console.log("fn(val):", fn(val))
      val = fn(val)
    }
    return val;
  }
}

const add1 = (num) => num + 1;
const double = (num) => num * 2;
const subtract10 = (num) => num - 10;

const composedFn = compose(subtract10, double, add1);
console.log(composedFn(3)) // (3 + 1) * 2 - 10 => -2
