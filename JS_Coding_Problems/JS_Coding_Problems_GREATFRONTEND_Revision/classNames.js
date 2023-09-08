/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  let arr = args;
  let ans = [];

  const convert = (arr) => {

    arr.forEach(it => {
      if (it === null) {
        return;
      }
      let type = typeof it;
      if (type === "number" && it > 0) {
        ans.push(it);
        return
      }
      if (type === "string" && it.length > 0) {
        ans.push(it);
        return
      }

      if (Array.isArray(it)) {
        convert(it);
        return;
      }

      if (type === "object") {
        Object.keys(it).forEach(key => {
          if (!!it[key]) {
            ans.push(key)
          }
        })
        return;
      }

    })
  }

  convert(arr);
  console.log(ans);
  return ans.join(" ");
}

classNames({ foo: true }, { bar: true });
classNames('a', ['b', { c: true, d: false }]); 