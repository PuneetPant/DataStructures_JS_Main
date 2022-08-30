let input = ''
process.stdin.on('data', (data) => {
  input += data
})

process.stdin.on('end', () => {
  input = input.trim().split('\n');
  main();
})

const main = () => {
  let val = parseInt(input);
  let n = input[0];
  let arr = input.slice(1)
  // console.log(n)
  // console.log(arr);
  displayArr(arr, 0);
}

const displayArr = (arr, idx) => {
  if (idx == arr.length) {
    return
  }

  console.log(arr[idx])
  displayArr(arr, idx + 1);
}