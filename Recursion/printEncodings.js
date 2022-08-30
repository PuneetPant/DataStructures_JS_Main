const main = () => {
  let val = '12121'
  printEncodings(val, '');
}

const printEncodings = (str, asf) => {
  if (str.length == 0) {
    console.log(asf)
    return;
  }


  for (let i = 0; i < str.length; i++) {
    let ch = str.slice(0, i + 1);
    let remStr = str.substring(i + 1);

    if (ch == '0') {
      return;
    }

    if (ch.length <= 2 && parseInt(ch) <= 26) {
      let getAlphabetsFromNumber = String.fromCharCode(parseInt(ch) + 96);
      printEncodings(remStr, asf + getAlphabetsFromNumber);
    }
  }
}
main();