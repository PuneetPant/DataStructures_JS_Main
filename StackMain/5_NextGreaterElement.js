/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums, arr) {
  let nge = new Array(arr.length).fill(0);
  let st = [];

  for (let i = arr.length - 1; i >= 0; i--) {

    if (st.length == 0) {
      nge[i] = -1
    } else if (st[st.length - 1] > arr[i]) {
      nge[i] = st[st.length - 1];
    } else {
      while (st[st.length - 1] < arr[i]) {
        st.pop();
      }
      nge[i] = st.length == 0 ? -1 : st[st.length - 1]
    }
    st.push(arr[i])
  }

  let ans = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {

    for (let j = 0; j < arr.length; j++) {
      if (nums[i] == arr[j]) {
        ans[i] = nge[j]
      }
    }
  }

  console.log(nge, ans)

  return ans;
};