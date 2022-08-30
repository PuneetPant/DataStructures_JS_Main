
'use strict'
process.stdin.resume();
process.stdin.setEncoding('utf-8')

let inputString = '';
process.stdin.on('data', data => { inputString += data })


process.stdin.on('end', _ => {
  // console.log('inputString: ',inputString);
  main();
})


const main = () => {
  const val = inputString.trim();
  printDecreasing(val);
}

const printDecreasing = (value) => {
  if (value == 0) {
    return;
  }
  console.log(value)
  printDecreasing(value - 1)
}
