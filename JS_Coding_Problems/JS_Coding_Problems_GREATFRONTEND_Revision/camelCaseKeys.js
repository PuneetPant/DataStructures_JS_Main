
const convert = (key) => {
  return "th";
}
function camelCaseKeys(obj) {
  Object.keys(obj).forEach(key => {
    console.log(key)
    newKey = convert(key)
    obj[newKey] = obj[key];
    if (typeof obj[key] === "object") {
      camelCaseKeys(obj[key])
    } else {

    }
  })
}

camelCaseKeys({ foo_bar: true, bar_baz: { baz_quz: '1', quz: '2' } })