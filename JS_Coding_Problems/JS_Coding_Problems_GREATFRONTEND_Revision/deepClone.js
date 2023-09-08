
const deepClone = (obj) => {
  let ans = {};
  const deepCopy = (obj) => {
    if (!obj) {
      return obj;
    }
    const copyObj = {};
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] !== "object" || Array.isArray(obj[key]))
        copyObj[key] = obj[key];
      else {
        copyObj[key] = deepCopy(obj[key]);
      }
    })
    console.log("copyObj: ", copyObj)
    return copyObj;
  }

  ans = deepCopy(obj);
  console.log("ans: ", ans);
}

const obj1 = { user: { role: { level: "1" } }, address: { house: 'arya nagar' } };
const obj2 = { foo_bar: true, bar_baz: { baz_quz: '1', quz: '2' } }
const clonedObj1 = deepClone(obj2);

// const obj2 = { foo: [{ bar: 'baz' }] };
// const clonedObj2 = deepClone(obj2);
