function celebrity(arr, n) {
  let st = []; // stack
  console.log(arr)

  // pushing indexes inside the stack
  for (let i = 0; i < n; i++) {
    st.push(i);
  }

  while (st.length > 1) {
    let i = st.pop();
    let j = st.pop();
    if (arr[i][j] == 1) {
      st.push(j)
    } else {
      st.push(i)
    }
  }

  let idx = st.pop();
  let flag = true
  // check for row
  for (let i = 0; i < arr.length; i++) {
    if (i != idx && arr[i][idx] != 1) {
      flag = false;
    }
  }

  // check for column
  for (let i = 0; i < arr.length; i++) {
    if (i != idx && arr[idx][i] != 0) {
      flag = false;
    }
  }

  return flag ? idx : -1

}

celebrity([[0, 1, 0],
[0, 0, 0],
[0, 1, 0]], 3)