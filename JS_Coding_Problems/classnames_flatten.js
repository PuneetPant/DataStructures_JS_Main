function classNames(...args) {
  let arr = args;
  let ans = [];
  const convert = (arr) => {
    arr.forEach((ele) => {
      let elt = typeof ele;
      if (ele && (elt === "string" || elt === "number")) {
        ans.push(ele);
        return;
      }
      if (Array.isArray(ele)) {
        convert(ele);
        return;
      }
      if (elt === "object" && ele !== null) {
        Object.keys(ele).forEach((key) => {
          if (ele[key]) {
            ans.push(key);
          }
        });
        return;
      }
    });
  };
  convert(arr);
  console.log(ans.join(" "));
  return ans.join(" ");
}

// classNames("foo", "bar"); // 'foo bar'
// classNames("foo", { bar: true }); // 'foo bar'
// classNames({ "foo-bar": true }); // 'foo-bar'
// classNames({ "foo-bar": false }); // ''
// classNames({ foo: true }, { bar: true }); // 'foo bar'
// classNames({ foo: true, bar: true }); // 'foo bar'
// classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
// classNames("a", ["b", { c: true, d: false }]);
classNames(null, false, "bar", undefined, 0, 1, { baz: null }, ""); // 'bar 1'
