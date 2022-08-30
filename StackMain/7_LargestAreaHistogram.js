/**
 * @param {number[]} heights
 * @return {number}
 */


var largestRectangleArea = function (arr) {
  class Pair {
    constructor(val, idx) {
      this.val = val;
      this.idx = idx;
    }
  }

  let st = [];
  // rbi - right boundary index
  let rbi = new Array(arr.length).fill(0);

  st.push(new Pair(arr[arr.length - 1], arr.length - 1))
  rbi[arr.length - 1] = arr.length - 1;

  for (let i = arr.length - 2; i >= 0; i--) {

    if (st[st.length - 1].val >= arr[i]) {

      while (st.length > 0 && st[st.length - 1].val >= arr[i]) {
        st.pop();
      }
      rbi[i] = st.length == 0 ? arr.length - 1 : st[st.length - 1].idx - 1
    } else {
      rbi[i] = st[st.length - 1].idx - 1;
    }

    st.push(new Pair(arr[i], i))
  }

  st = [];
  // left boundary index
  let lbi = new Array(arr.length).fill(0);

  st.push(new Pair(arr[0], 0));
  lbi[0] = 0;

  for (let i = 1; i < arr.length; i++) {
    if (st[st.length - 1].val >= arr[i]) {
      while (st.length > 0 && st[st.length - 1].val >= arr[i]) {
        st.pop();
      }
      lbi[i] = st.length == 0 ? 0 : st[st.length - 1].idx + 1
    } else {
      lbi[i] = st[st.length - 1].idx + 1;
    }

    st.push(new Pair(arr[i], i))
  }

  console.log(rbi, lbi)

  let ans = 0;

  for (let i = 0; i < arr.length; i++) {
    let val = (Math.abs(rbi[i] - lbi[i]) + 1) * arr[i];
    if (val > ans) {
      ans = val
    }
  }
  console.log(ans)
  return ans
};