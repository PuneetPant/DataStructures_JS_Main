/**
 * @param {Array} array - Array from which different elements are to be removed.
 * @param {Array} values - Array of values that are to be removed from the original array.
 * @return {Array} Returns filtered array.
 */
export default function difference(array, values) {
  console.log(array, values)
  let set = new Set();
  values.forEach(it => {
    set.add(it)
  })
  let ans = [];
  array.forEach(it => {
    if (!set.has(it)) {
      ans.push(it)
    }
  })
  return ans;
}