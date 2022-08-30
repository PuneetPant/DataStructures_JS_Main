var removeDuplicates = function (str) {
  let st = [];
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    console.log(ch)
    if (st.length > 0 && st[st.length - 1] == ch) {
      st.pop();
    } else {
      st.push();
    }
    // console.log(st);
  }
  console.log(st);
  // return st.join("");
};
removeDuplicates("abbaca")