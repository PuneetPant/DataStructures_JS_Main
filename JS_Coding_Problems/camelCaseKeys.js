const camelCaseKeys = (obj) => {
  // let ans = { ...obj };
  let ans = {};
  function camelCase(str) {
    if (!/[_]/.test(str)) {
      return str;
    }

    return str
      .toLowerCase()
      .replace(/([_])([a-z])/g, (_match, _p1, p2) => p2.toUpperCase());
  }

  const convertToCamelCase = (object) => {
    Object.keys(object).forEach((key) => {
      let newKey = camelCase(key);

      console.log(key, object[key], typeof object[key]);
      if (typeof object[key] !== "object") {
        ans[newKey] = object[key];
      } else {
        // ans[newKey] = object[key];
        convertToCamelCase(object[key]);
      }
    });
  };

  convertToCamelCase(obj);
  return ans;
};

let ans = camelCaseKeys({ foo_bar: true, bar_baz: { baz_qux: "1" } });
console.log(ans);
