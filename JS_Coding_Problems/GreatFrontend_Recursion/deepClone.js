const deepClone = (obj) => {
  const helper = (obj) => {
    const copyObj = {};
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] !== 'object') {
        copyObj[key] = obj[key];
      } else {
        copyObj[key] = helper(obj[key])
      }
    })
    return copyObj;
  }
  const ans = helper(obj);
  console.log("ans: ", ans)
}


const obj1 = { user: { role: { level: "1" } }, address: { house: 'arya nagar' } };
const obj2 = { foo_bar: true, bar_baz: { baz_quz: '1', quz: '2' } }
const clonedObj1 = deepClone(obj1);