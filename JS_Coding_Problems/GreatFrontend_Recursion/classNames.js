const classNames = (...args) => {
  const ans = [];
  const helper = (it) => {
    if (it === null) {
      return;
    }
    if (typeof it === "string" && it.length > 0) {
      ans.push(it);
      return;
    }
    if (typeof it === "number" && it > 0) {
      ans.push(it);
      return;
    }

    if (Array.isArray(it)) {
      it.forEach((item) => {
        helper(item);
      });
      return;
    }
    if (typeof it === "object") {
      Object.keys(it).forEach((key) => {
        if (!!it[key]) {
          ans.push(key);
        }
      });
    }
  };

  helper(args);
  return ans;
};
console.log(
  classNames(null, false, "bar", undefined, { baz: null }, "") // 'bar'
);
