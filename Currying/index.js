const sum = (a, b, c) => {
  return a + b + c;
};

const curry = (fn) => {
  let inputs = [];

  function helper(val) {
    console.log("val: ", val);
    if (val !== undefined) {
      inputs.push(val);
      console.log(inputs);
    }
    if (inputs.length === fn.length) {
      return fn.apply(this, inputs);
    }
    return helper;
  }

  return helper;
};

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)()()(4));
