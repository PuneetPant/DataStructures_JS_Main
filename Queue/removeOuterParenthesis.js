var removeOuterParentheses = function (str) {
  let q = [];
  let obc = 0; // opening bracket count
  let cbc = 0; //closing bracket count
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (ch == '(') {
      q.push(ch);
      obc++;
    } else {
      if (cbc + 1 == obc) {
        let count = 0;
        while (q.length > 0) {
          if (count > 0) {
            ans += q.shift();
          }
          count++;
        }
        obc = 0;
        cbc = 0;
      } else {
        q.push(ch);
        cbc++;
      }
    }
  }
  return ans;
};
removeOuterParentheses("(()())(())")