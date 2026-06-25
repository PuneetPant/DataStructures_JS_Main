const camelCaseKeys = (obj) => {
  const convert = (obj) => {
    let copyObj = {};

    Object.keys(obj).forEach(key => {
      if (typeof obj[key] !== 'object') {
        copyObj[`${key}__PP`] = obj[key];
      } else {
        copyObj[`${key}__PP`] = convert(obj[key])
      }
    })
    // console.log("copyObj:", copyObj)
    return copyObj;
  }
  const ans = convert(obj);
  console.log("ans: ", ans)
}
// camelCaseKeys({ foo_bar: true });
// { fooBar: true }

camelCaseKeys({ foo_bar: true, bar_baz: { baz_qux: '1' } });
// { fooBar: true, barBaz: { bazQux: '1' } }

camelCaseKeys([{ baz_qux: true }, { foo: true, bar: [{ foo_bar: 'hello' }] }]);
// [{ bazQux: true }, { foo: true, bar: [{ fooBar: 'hello' }] }]
