/**
 * @param {Array} array - The array to process.
 * @param {number} [size=1] - The length of each chunk.
 * @returns {Array} - Returns the new array of chunks.
 */
export default function chunk(arr, size = 1) {
  let ans = [];
  let i = 0;
  while (i < arr.length) {
    let a = arr.slice(i, i + size);
    ans.push(a);
    i += size;
  }
  console.log(ans);
  return ans;
}