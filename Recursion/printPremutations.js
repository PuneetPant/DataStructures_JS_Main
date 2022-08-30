const main = () => {
  // let val = input;
  let val = 'abc'
  printPermutations(val, '')
}

const printPermutations = (str, asf) => {

  if (str.length == 0) {
    console.log(asf)
    return;
  }


  for (let i = 0; i < str.length; i++) {
    let getChar = str.charAt(i)
    let remStr = str.substring(0, i) + str.substring(i + 1);
    // console.log('getChar: ',getChar)
    // console.log('remStr: ',remStr)
    printPermutations(remStr, asf + getChar);
  }
}
main();