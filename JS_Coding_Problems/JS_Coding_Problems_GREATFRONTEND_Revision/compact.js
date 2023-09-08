/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
export default function compact(arr) {
  let ans = arr.filter(it => {
    return !!it;
  })
  console.log(arr, ans)
  return ans;
}