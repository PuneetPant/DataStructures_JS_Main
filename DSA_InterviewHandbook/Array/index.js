const lengthOfLongestSubstring = (str) = {

}

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  if (nums.length == 1) {
    return nums[0] == target ? nums.length : 0;
  }
  let arr = new Array(nums.length + 1).fill(0);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    arr[i + 1] = sum;
  }
  console.log(arr)
  let i = 0;
  let j = 1;
  let ans = Number.MAX_SAFE_INTEGER;
  while (j < arr.length) {
    let sum = arr[j] - arr[i];
    if (sum == target) {
      if (j - i < ans) {
        ans = j - i;
      }
      i++;
      j++;
    } else if (sum < target) {
      j++;
    } else {
      i++;
    }
  }
  return ans == Number.MAX_SAFE_INTEGER ? 0 : ans;
};






const main = () => {
  let ans = lengthOfLongestSubstring("pwwkew");
  console.log(ans);
}