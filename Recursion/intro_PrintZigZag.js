
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
  printZigZag(val)
}

const printZigZag = (value) => {
    
    if(value == 0){
        return ;
    }
  
  console.log(value)
  printZigZag(value - 1);
  console.log(value);
  printZigZag(value - 1);
  console.log(value)
}
