// let input = '';
// process.stdin.on('data', (data) => {
//     input += data
// })

// process.stdin.on('end' , () => {
//     main()
// })

const main = () => {
  // let val = input;
  let val = 6;
  const ans = factorial(val);
  console.log(ans)
}

const factorial = (num) => {
  if (num == 1) {
    return 1;
  }

  let value = factorial(num - 1);

  return value * num;
}
main();