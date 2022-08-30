let input = ''
process.stdin.on('data', (data) => {
  input += data
})

process.stdin.on('end', () => {
  input = input.trim().split('\n').map(val => {
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
  const ans = findFirstIndex(arr, 0, findValue);
  console.log(ans)
}

const findFirstIndex = (arr, idx, value) => {
  if (idx == arr.length) {
    return -1;
  }

  let getIdx = findFirstIndex(arr, idx + 1, value);

  if (arr[idx] == value) {
    //   console.log('condition -1',arr[idx], value)
    return idx
  } else {
    //   console.log('condition -2',arr[idx], value)
    return getIdx
  }
}