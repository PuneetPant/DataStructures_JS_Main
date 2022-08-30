let input = ''
process.stdin.on('data', (data) => {
  input += data
})

process.stdin.on('end', () => {
  input = input.trim().split('`\n').map(val => {
    return val.trim()
  });
  main();
})

const main = () => {
  let val = parseInt(input);
  let n = input[0];
  let arr = input.slice(1, input.length - 1)
  let findValue = input[input.length - 1]
  // console.log(n, arr, findValue)
  const ans = findAllIndices(arr, 0, findValue);
  //   console.log(ans.reverse())
  ans.reverse().forEach(val => {
    console.log(val)
  })
}

const findAllIndices = (arr, idx, value) => {
  if (idx == arr.length) {
    return []
  }

  if (arr[idx] == value) {
    let newArr = findAllIndices(arr, idx + 1, value)
    newArr.push(idx);
    return newArr;
  } else {
    let newArr = findAllIndices(arr, idx + 1, value)
    return newArr;
  }
}