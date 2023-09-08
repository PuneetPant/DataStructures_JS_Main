/**
 * @param {...Function} args
 * @returns Function
 */
export default function compose(...fns) {

  return function (x) {
    let val = x;
    for (let i = fns.length - 1; i >= 0; i--) {
      let fn = fns[i];
      val = fn.call(this, val);
      console.log("val: ", val)
    }
    return val;
  }
}