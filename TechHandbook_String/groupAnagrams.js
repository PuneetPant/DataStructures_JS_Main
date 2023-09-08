/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (arr) {
  let map = new Map();
  let ansMap = new Map();
  arr.forEach((str, idx) => {
    let val = 1;
    for (let i = 0; i < str.length; i++) {
      let it = str.charAt(i);
      if (!map.has(it)) {
        map.set(it, map.size + 1);
      }
      val = val * map.get(it);
    }
    if (!ansMap.has(val)) {
      ansMap.set(val, [idx]);
    } else {
      let parr = ansMap.get(val);
      parr.push(idx);
      ansMap.set(val, parr);
    }
  });
  console.log(ansMap);
  let ans = [];
  for (let key of ansMap.keys()) {
    let valArr = ansMap.get(key);
    let toPush = [];
    valArr.forEach(it => {
      toPush.push(arr[it])
    })
    ans.push(toPush)
  }
  return ans;
};
