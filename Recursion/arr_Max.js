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
  const ans = max(arr, 0);
  console.log(ans)
}

const max = (arr, idx) => {
  if (idx == arr.length - 1) {
    return arr[idx];
  }


  let value = max(arr, idx + 1);
  let maxValue = Math.max(value, arr[idx])

  return maxValue;
}