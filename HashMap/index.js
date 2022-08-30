
const highestFrequencyCharacter = (str) => {
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (!map.has(ch)) {
      map.set(ch, 1);
    } else {
      let val = map.get(ch);
      map.set(ch, val + 1)
    }
  }
  // // Converting of map to Array
  // let arr = [...map]
  // console.log(arr)

  // console.log(map.keys())
  let ans = "";
  let count = 0;
  for (let key of map.keys()) {
    let val = map.get(key)
    if (val > count) {
      count = val;
      ans = key;
    }
  }
  return ans;
}


var getCommonElements1 = function (nums1, nums2) {
  let map = new Map();
  let ans = []
  for (let i = 0; i < nums1.length; i++) {
    if (!map.has(nums1[i])) {
      map.set(nums1[i])
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      ans.push(nums2[i])
      map.delete(nums2[i])
    }
  }
  return ans;
};

var getCommonElements2 = function (nums1, nums2) {
  let map = new Map();
  let ans = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!map.has(nums1[i])) {
      map.set(nums1[i], 1)
    } else {
      let val = map.get(nums1[i])
      map.set(nums1[i], val + 1)
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      ans.push(nums2[i]);

      let val = map.get(nums2[i]);
      val > 1 ? map.set(nums2[i], val - 1) : map.delete(nums2[i])
    }
  }
  return ans;
};

var longestConsecutive = function (arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], true);
  }

  // check for starting points
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i] - 1)) {
      map.set(arr[i], false)
    }
  }

  //check for length
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    const val = map.get(arr[i]);
    if (val == true) {
      let len = 1;
      while (true) {
        if (map.has(arr[i] + 1)) {
          len += 1;
        } else {
          break;
        }
      }
      if (len > ans) {
        ans = len;
      }
    }
  }

  return ans;
};




const main = () => {
  // console.log(highestFrequencyCharacter("zmszeqxllzvheqwrofgcuntypejcxovtaqbnqyqlmrwitc"))
  console.log(longestConsecutive([100,4,200,1,3,2]))
}

main()