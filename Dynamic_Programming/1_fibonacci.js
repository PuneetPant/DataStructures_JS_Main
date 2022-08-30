let input = ''
process.stdin.on('data', (data) => {
  input += data
})

process.stdin.on('end', () => {
  main()
})

const main = () => {
  let val = parseInt(input)

  const ans = fibonacciDp(val)
  console.log(ans)
}

const fibonacciDp = (val) => {
  let arr = new Array(val + 1).fill(0)
  // Object.freeze(arr);
  arr[0] = 0;
  if (val == 0) {
    return arr[0]
  }

  arr[1] = 1;

  for (let i = 2; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[arr.length - 1];

}