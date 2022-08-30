let input = '';

process.stdin.on('data', (data) => {
  input += data
})

process.stdin.on('end', () => {

  main()
})

const main = () => {
  input = input.split('\n').map(val => {
    return val.trim();
  })

  console.log(input)
  let n = input[0];
  let arr = input.slice(1, input.length - 1);
  let target = input[input.length - 1]
  console.log(n, arr, target)
}