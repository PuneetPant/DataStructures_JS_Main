/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


var nextGreaterElementIndexArray = function (arr, k) {
  let st = [];
  let ngei = new Array(arr.length).fill(0)

  class Pair {
    constructor(val, idx) {
      this.val = val;
      this.idx = idx;
    }
  }

  for (let i = arr.length - 1; i >= 0; i--) {

    if (st.length == 0) {
      ngei[i] = -1
    } else if (st[st.length - 1].val > arr[i]) {
      ngei[i] = st[st.length - 1].idx;
    } else {
      while (st.length > 0 && st[st.length - 1].val < arr[i]) {
        st.pop();
      }
      ngei[i] = st.length == 0 ? -1 : st[st.length - 1].idx
    }
    st.push(new Pair(arr[i], i))
  }
  // console.log(ngei)
  return ngei;
}

var maxSlidingWindow = function (arr, k) {
  let ngei = nextGreaterElementIndexArray(arr, k);
  let ans = [];
  for (let i = 0; i <= arr.length - k; i++) {
    let j = ngei[i];
    let prev = arr[i]
    let flag = 0;
    while (j <= i + (k - 1) && j != -1) {
      prev = j;
      j = ngei[j];
      flag++;
    }

    flag == 0 ? ans.push(prev) : ans.push(arr[prev])
  }
  console.log(ans)
  return ans;
};

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)